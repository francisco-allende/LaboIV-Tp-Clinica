import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonInputsComponent } from '../../components/register/common-inputs/common-buttons.component';
import { PacienteInputsComponent } from '../../components/register/paciente-inputs/paciente-inputs.component';
import { EspecialistaInputsComponent } from '../../components/register/especialista-inputs/especialista-inputs.component';
import { EmailPasswordInputsComponent } from '../../components/register/email-password-inputs/email-password-inputs.component';

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

    constructor(
      private fb: FormBuilder,
      public loginService: LoginService,
      public router: Router) 
      {
        this.registerForm = this.fb.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          edad: [0, [Validators.required, Validators.min(0)]],
          dni: ['', Validators.required],
          obraSocial: [''],
          especialidad: [''],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          imagenPerfil1: [''],
          imagenPerfil2: [''],
          imagenPerfil: ['']
        });
    }

    get fc() { return this.registerForm.controls; }

    switchView(view: 'paciente' | 'especialista') {
      this.view = view;
    }

    receiveValues(values: any) {
      this.registerForm.patchValue(values);
    }

    handleFileInput(event: Event, imageField: string) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.registerForm.patchValue({
          [imageField]: input.files[0].name
        });
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
}
