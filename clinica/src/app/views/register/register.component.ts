import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControlName, FormControl, FormArray } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { onlyLettersValidator, ageRangeValidator, dniValidator, imgFormatValidator, confirmPasswordValidator, } from '../../validators/form-validators';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadesService } from '../../services/especialidades.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEspecialidadDialogComponent } from '../../components/register/add-especialidad-dialog/add-especialidad-dialog.component';
import { CaptchaComponent } from '../../components/register/captcha/captcha.component';
import { UserModel } from '../../models/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, faL } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CaptchaComponent, FontAwesomeModule, CommonModule, AutofocusDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    newUser: UserModel | undefined;
    registerForm!:FormGroup;
    view: 'paciente' | 'especialista' = 'paciente';
    showForm: boolean = false;
    mainImgLoaded:boolean = false;
    extraIMgLoaded:boolean = false;
    imgsUploaded:boolean = false;
    especialidades: string[] = [];
    showModal: boolean = false;
    arrImages:any[] = [];
    urls:any[] = [];
    validToken: boolean = false;
    myEspecialidades:string[] = [];

    faPlus = faPlus;
    faMinus = faMinus;

    private storage:Storage = getStorage();

    constructor(
      private fb: FormBuilder,
      public loginService: LoginService,
      private toast: ToastrService,
      private especialidadService: EspecialidadesService,
      public dialog: MatDialog,
      public router: Router) 
      {
        this.registerForm = this.fb.group({
          nombre: ['', [Validators.required, onlyLettersValidator()]],
          apellido: ['', [Validators.required, onlyLettersValidator()]],
          edad: [0, [Validators.required, ageRangeValidator()]],
          dni: ['', [Validators.required, dniValidator()]],
          obraSocial: ['', [onlyLettersValidator()]],
          especialidades: this.fb.array([]),
          //especialidad: ['', [onlyLettersValidator()]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          repeatPassword: ['', [Validators.required, Validators.minLength(8), confirmPasswordValidator()]],
          mainImg: ['', [Validators.required ,imgFormatValidator()]],
          extraImg: ['', imgFormatValidator()],
        });
      }

      ngOnInit(){
        this.especialidadService.getAllEspecialidades().subscribe(data =>{
          this.especialidades = data;
          this.agregarOtraEspecialidad()
        })
      }

    get fc() { return this.registerForm.controls; }

    switchView(view: 'paciente' | 'especialista' ) {
      this.view = view;
      this.showForm = true;
    }

    receiveValues(values: any) {
      this.registerForm?.patchValue(values);
    }

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
      } else if(this.arrImages.length == 2 && this.view == "especialista"){
        this.arrImages.splice(0, 1); 
      }
    }
    
    checkLoaded(formControlName: string){
      let img = this.registerForm?.get(formControlName)?.value;
      if(img != ""){
        if (formControlName === 'mainImg') {
          this.mainImgLoaded = true;
        } else if (formControlName === 'extraIMg') {
          this.extraIMgLoaded = true;
        } 
      }
    }

    async createUser(){
      if (this.isFormValid()) {
        try{
          await this.uploadFile();
          this.loginService.register(this.setNewUser());
        }catch(error){
          console.log(error)
        } 
      }
    }

    setNewUser(): any{
      const { nombre , apellido, dni, edad, email, password, especialidad, obraSocial, mainImg, extraImg } = this.registerForm.value;
      const especialidadesFormArray = this.registerForm.get('especialidades') as FormArray;
      const especialidadesSeleccionadas = especialidadesFormArray.value;
      this.myEspecialidades = especialidadesSeleccionadas.map((especialidad: { especialidad: any; }) => especialidad.especialidad);

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
          especialidad: this.myEspecialidades,
          estado: this.view == "paciente" ? "habilitado" : "pendiente",
          rol: this.view
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

    addEspecialidad(): void {
      const dialogRef = this.dialog.open(AddEspecialidadDialogComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const nuevaEspecialidad = result.toLowerCase().trim();
          const especialidadExistente = this.especialidades.some(especialidad => especialidad.toLowerCase().trim() === nuevaEspecialidad);
    
          if (especialidadExistente) {
            this.toast.error("La especialidad ya existe");
            this.registerForm.get('especialidad')?.setErrors({ exists: true });
          } else {
            this.especialidadService.altaEspecialidad(result);
            this.toast.success("Especialidad agregada exitosamente");
          }
        }
      });
    }
    
    get especialidadesFormArray() {
      return this.registerForm.get('especialidades') as FormArray;
    }

    getEspecialidadesDisponibles(): string[] {
      const especialidadesSeleccionadas = this.especialidadesFormArray.value.map((control: { especialidad: any; }) => control.especialidad);
      let retorno = this.especialidades.filter(especialidad => !especialidadesSeleccionadas.includes(especialidad));
      return retorno;
    }

    agregarOtraEspecialidad(): void {
      const especialidadesControl = this.especialidadesFormArray;
   
      // Verificar si ya se seleccionó la especialidad
      const especialidadesSeleccionadas = especialidadesControl.controls.map(control => control.get('especialidad')?.value);
      const especialidadDisponible = this.especialidades.filter(especialidad => !especialidadesSeleccionadas.includes(especialidad));

      if (especialidadDisponible.length === 0) {
        this.toast.error("No hay especialidades disponibles para agregar.'")
        return;
      }

      const nuevoControl = this.fb.group({
        especialidad: [especialidadDisponible[0], [onlyLettersValidator()]]
      });

      especialidadesControl.push(nuevoControl);
    }

    eliminarEspecialidad(index: number): void {
      this.especialidadesFormArray.removeAt(index);
    }


    handleCaptchaValidation(valid: any) {
      this.validToken = valid;
    }
 
    //Valido campos en comun y segmento por tipo de usuario
    isFormValid(){
      let retorno:boolean | undefined = false;

      const isCommonValid = this.registerForm.get('nombre')?.valid && 
                            this.registerForm.get('apellido')?.valid && 
                            this.registerForm.get('dni')?.valid && 
                            this.registerForm.get('edad')?.valid && 
                            this.registerForm.get('email')?.valid && 
                            this.registerForm.get('password')?.valid &&
                            this.registerForm.get('repeatPassword')?.valid &&
                            this.registerForm.get('mainImg')?.valid &&
                            this.validToken
      
      if(isCommonValid){
        if (this.view === 'paciente') {
          retorno =
                 this.registerForm.get('obraSocial')?.valid &&
                 this.registerForm.get('extraImg')?.valid;
        } else if (this.view == 'especialista') {
          const especialidadesFormArray = this.registerForm.get('especialidades') as FormArray;
          retorno = especialidadesFormArray.controls.every(control => control.valid);
        }
      }
      
      return retorno;
    }
}
