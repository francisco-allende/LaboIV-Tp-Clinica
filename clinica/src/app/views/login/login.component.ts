import { Component, Output, EventEmitter } from '@angular/core';
import { PacienteModel } from '../../models/paciente';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router , ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user';
import { EmailPasswordInputsComponent } from '../../components/register/email-password-inputs/email-password-inputs.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, EmailPasswordInputsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  loginUser: UserModel = {email: '', password: '', rol: ''}; 


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

  login() {
    if(this.loginForm.valid){
        this.loginUser.email = this.loginForm.controls['email'].value;
        this.loginUser.password = this.loginForm.controls['password'].value;
        this.loginService.addToLogger(this.loginUser.email);
        this.loginService.login(this.loginUser);
        this.toast.success(`Nos alegra verte ${this.loginUser.email}!`);
        this.router.navigateByUrl('/');
    }
  }
            
  goToRegister=()=> this.router.navigateByUrl('/register');

}