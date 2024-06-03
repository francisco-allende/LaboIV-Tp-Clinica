import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonInputsComponent } from '../../components/register/common-inputs/common-buttons.component';
import { PacienteInputsComponent } from '../../components/register/paciente-inputs/paciente-inputs.component';
import { EspecialistaInputsComponent } from '../../components/register/especialista-inputs/especialista-inputs.component';
import { EmailPasswordInputsComponent } from '../../components/register/email-password-inputs/email-password-inputs.component';
import { onlyLettersValidator, positiveNumberValidator, dniValidator, imgFormatValidator } from '../../validators/form-validators';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonInputsComponent, PacienteInputsComponent, EspecialistaInputsComponent, EmailPasswordInputsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    newUser: UserModel = { email: '', password: '', rol: '' }; 
    registerForm!:FormGroup;
    view: 'paciente' | 'especialista' = 'paciente';
    imagenPerfilLoaded:boolean = false;
    imagenPerfilLoadedFirst:boolean = false;
    imagenPerfilLoadedSecond:boolean = false;

    private storage:Storage = getStorage();

    constructor(
      private fb: FormBuilder,
      public loginService: LoginService,
      private toast: ToastrService,
      public router: Router) 
      {

    }

    ngOnInit(){
      this.registerForm = this.fb.group({
        nombre: ['', [Validators.required, onlyLettersValidator()]],
        apellido: ['', [Validators.required, onlyLettersValidator()]],
        edad: [0, [Validators.required, positiveNumberValidator()]],
        dni: ['', [Validators.required, dniValidator()]],
        obraSocial: ['', [onlyLettersValidator()]],
        especialidad: ['', [onlyLettersValidator()]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        imagenPerfil1: ['', imgFormatValidator()],
        imagenPerfil2: ['', imgFormatValidator()],
        imagenPerfil: ['', imgFormatValidator()] 
      });
    }

    get fc() { return this.registerForm.controls; }

    switchView(view: 'paciente' | 'especialista') {
      this.view = view;
    }

    receiveValues(values: any) {
      this.registerForm?.patchValue(values);
    }

    async handleFileInput(event: Event, imageField: string) {
      const dni = this.registerForm?.get('dni')?.value.toString();
      
      try{
        if(dni){
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            const imageUrl = await this.uploadFile(imageField, dni, input.files[0]);
            
            if (imageUrl) {
              this.registerForm.patchValue({
                [imageField]: imageUrl
              });
            }
          }else{
            this.toast.error("Ups! No se pudo subir la imagen. Intente con otra.");
          }
        }else{
          this.toast.error("Es necesario cargar el DNI antes que las imagenes"); 
        }
      }catch(error){
        console.log("error al subir la imagen: " ,error);
      }
    }

    async uploadFile(formControlName: string, dni: string, file:any): Promise<string | null> {
      
      if (file) {
        const randomNumber = Math.floor(Math.random() * 1000000);

        const filePath = `users/img_${formControlName}_${dni}_${randomNumber}`;
        const fileRef = ref(this.storage, filePath);
        
        await uploadBytes(fileRef, file);
  
        const url = await getDownloadURL(fileRef);
        return url;
      } else {
        return null;
      }
    }
  
    checkLoaded(formControlName: string){
      let img = this.registerForm?.get(formControlName)?.value;
      if(img != ""){
        switch(formControlName){
          case 'imagenPerfil':
            this.imagenPerfilLoaded = true;
            break;
          
          case 'imagenPerfil1':
            this.imagenPerfilLoadedFirst = true;
          break;

          case 'imagenPerfil2':
            this.imagenPerfilLoadedSecond = true;
          break;

          default:
            break;
        }
      }
    }


    createUser(){
      if (this.registerForm.valid) {
        if(this.setNewUser()){
          this.loginService.register(this.newUser);
        }
      }
    }

    setNewUser():boolean{
      const { email, password } = this.registerForm.value;
      this.newUser.email = email;
      this.newUser.password = password;
      return this.newUser.email && this.newUser.password ? true : false;
    }   

    //Valido campos en comun y segmento por tipo de usuario
    isFormValid(){
      let retorno:boolean | undefined = false;

      const isCommonValid = this.registerForm.get('nombre')?.valid && 
                            this.registerForm.get('apellido')?.valid && 
                            this.registerForm.get('dni')?.valid && 
                            this.registerForm.get('edad')?.valid && 
                            this.registerForm.get('email')?.valid && 
                            this.registerForm.get('password')?.valid 
      
      if(isCommonValid){
        if (this.view === 'paciente') {
          retorno =
                 this.registerForm.get('obraSocial')?.valid &&
                 this.registerForm.get('imagenPerfil1')?.valid &&
                 this.registerForm.get('imagenPerfil2')?.valid;
        } else {
          retorno =
                 this.registerForm.get('especialidad')?.valid &&
                 this.registerForm.get('imagenPerfil')?.valid;
        }
      }
      
      return retorno;
    }
}
