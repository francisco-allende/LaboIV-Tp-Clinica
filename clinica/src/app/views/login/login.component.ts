import { Component, Output, EventEmitter } from '@angular/core';
import { PacienteModel } from '../../models/paciente';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router , ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toast: ToastrService,
              private loginService: LoginService) 
              {
                this.loginForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', [Validators.required, Validators.minLength(8)]]
                });
               }

  receiveValues(values: any) {
    this.loginForm.patchValue(values);
  }

  async login() {
    if(this.loginForm.valid){
        let email:string = this.loginForm.controls['email'].value;
        let password:string = this.loginForm.controls['password'].value;

        if(await this.isEspecialistaAutorizadoOrOther(email)){
          this.loginService.addToLogger(email);
          this.loginService.login(email, password);
        }
    }
  }

  async isEspecialistaAutorizadoOrOther(email:string):Promise<boolean>{
      let retorno = true;
      let user = await this.loginService.getUserByEmail(email);
      if(user.rol == "especialista"){
         retorno = user.estado == "autorizado" ? true : false;
      }
      if(!retorno){
        this.toast.error("Siendo medico especialista, debe estar autorizado por un admin para entrar");
      }

      return retorno;
  }

  easyLogin(rol:string){
    if(rol == "admin"){
      this.loginForm.controls['email'].setValue('franallende2000@gmail.com');
      this.loginForm.controls['password'].setValue('adminadmin');
    }else if(rol == "especialista"){
      this.loginForm.controls['email'].setValue('myEspecialista@gmail.com');
      this.loginForm.controls['password'].setValue('pepepepe');
    }else if(rol == "paciente"){
      this.loginForm.controls['email'].setValue('yegevan303@jzexport.com');
      this.loginForm.controls['password'].setValue('pepepepe');
    }
  }

  goToRegister=()=> this.router.navigateByUrl('/register');

}