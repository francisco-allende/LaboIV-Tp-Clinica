import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControlName, FormControl, FormArray } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { onlyLettersValidator, ageRangeValidator, dniValidator, imgFormatValidator, confirmPasswordValidator, } from '../../../validators/form-validators';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { CaptchaComponent } from '../../../components/register/captcha/captcha.component';
import { UserModel } from '../../../models/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from '../../../directives/autofocus.directive';

@Component({
  selector: 'app-alta-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CaptchaComponent, FontAwesomeModule, CommonModule, AutofocusDirective],
  templateUrl: './alta-admin.component.html',
  styleUrl: './alta-admin.component.css'
})
export class AltaAdminComponent {

  newUser: UserModel | undefined;
  registerForm!:FormGroup;
  mainImgLoaded:boolean = false;
  imgsUploaded:boolean = false;
  arrImages:any[] = [];
  urls:any[] = [];
  validToken: boolean = false;
  private storage:Storage = getStorage();

  constructor(
    private fb: FormBuilder,
    public loginService: LoginService,
    private toast: ToastrService,
    public router: Router) 
    {
      this.registerForm = this.fb.group({
        nombre: ['', [Validators.required, onlyLettersValidator()]],
        apellido: ['', [Validators.required, onlyLettersValidator()]],
        edad: [0, [Validators.required, ageRangeValidator()]],
        dni: ['', [Validators.required, dniValidator()]],
        obraSocial: ['', [onlyLettersValidator()]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(8), confirmPasswordValidator()]],
        mainImg: ['', [Validators.required ,imgFormatValidator()]],
      });
    }

    get fc() { return this.registerForm.controls; }

    async handleFileInput(event: Event, imageField: string) {
      let dni = this.registerForm?.get('dni')?.value.toString();
      if(!dni){
        dni =  Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
      }
      
      try{
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            this.arrImages.push({ formControlName: imageField, dni: dni, file: input.files[0]})
          }else{
            this.toast.error("Ups! No se pudo subir la imagen. Intente con otra.");
          }
      
      }catch(error){
        console.log("error al subir la imagen: " ,error);
      }
    }

    async uploadFile(){
      
        this.ensureMaxTwoElements();

        if(this.arrImages.length > 0 && !this.imgsUploaded){
          for(let i = 0; i <= this.arrImages.length; i++){
            if (this.arrImages[i]?.file) {
              const randomNumber = Math.floor(Math.random() * 1000000);
      
              const filePath = `users/${this.arrImages[0].dni}/img_${this.arrImages[i].formControlName}_${this.arrImages[i].dni}_${randomNumber}`;
              const fileRef = ref(this.storage, filePath);
              
              await uploadBytes(fileRef, this.arrImages[i].file);
        
              const url = await getDownloadURL(fileRef);
              this.urls.push({imgField:this.arrImages[i].formControlName, url:url});
              this.imgsUploaded = true;
            } 
          }
        }        
    }

    ensureMaxTwoElements() {
      if (this.arrImages.length > 2) {
        this.arrImages.splice(0, this.arrImages.length - 2); 
      } else if(this.arrImages.length == 2){
        this.arrImages.splice(0, 1); 
      }
    }

    checkLoaded(formControlName: string){
      let img = this.registerForm?.get(formControlName)?.value;
      if(img != ""){
        if (formControlName === 'mainImg') {
          this.mainImgLoaded = true;
        } 
      }
    }

    async createUser(){
      if (this.isFormValid()) {
        try{
          await this.uploadFile();
          this.loginService.register(this.setNewUser());
          this.router.navigateByUrl('/usuarios');
        }catch(error){
          console.log(error)
        } 
      }
    }

    setNewUser(): any{
      const { nombre , apellido, dni, edad, email, password, obraSocial, mainImg, } = this.registerForm.value;
     
        this.newUser = {
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          edad: edad,
          email: email,
          password: password,
          obraSocial: obraSocial,
          mainImg: this.getImgUrl("mainImg"),
          extraImg: this.getImgUrl("extraImg"),
          especialidad: [],
          estado: "habilitado",
          rol: 'admin'
        }
       
        return this.newUser;
      
    } 

    getImgUrl(imgFiled:string){
      let url = this.urls.find(x=> x.imgField == imgFiled)
      if(url){
        return url.url;
      }
      return '';
    }

    handleCaptchaValidation(valid: any) {
      this.validToken = valid;
    }
 
    //Valido campos en comun y segmento por tipo de usuario
    isFormValid(){

      const isCommonValid = this.registerForm.get('nombre')?.valid && 
                            this.registerForm.get('apellido')?.valid && 
                            this.registerForm.get('dni')?.valid && 
                            this.registerForm.get('edad')?.valid && 
                            this.registerForm.get('email')?.valid && 
                            this.registerForm.get('password')?.valid &&
                            this.registerForm.get('repeatPassword')?.valid &&
                            this.registerForm.get('mainImg')?.valid &&
                            this.registerForm.get('obraSocial')?.valid &&
                            this.validToken
      
      return isCommonValid;
    }

}
