import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { UsersService } from '../../services/users.service';
import { Router , ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading:boolean = true;
  loginForm: FormGroup;
  easyLoginUsers: UserModel[] = [];


  constructor(private fb: FormBuilder,
              private router: Router,
              private toast: ToastrService,
              private loginService: LoginService,
              private userService: UsersService) 
              {
                this.loginForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', [Validators.required, Validators.minLength(8)]]
                });
               }

 ngOnInit(){
  this.getEasyLoginUsersData()
 }

 async getEasyLoginUsersData(){
  try{
    this.loading = true;
    this.easyLoginUsers = await this.loginService.getAllEasyLoginUsers();
  }catch(error){
    console.log(error)
  }finally{
    this.loading = false;
  }
 }

  async login() {
    if(this.loginForm.valid){
        let email:string = this.loginForm.controls['email'].value;
        let password:string = this.loginForm.controls['password'].value;
        if(await this.isEspecialistaAutorizadoOrOther(email)){
          this.loginService.login(email, password);
        }
    }
  }

  async isEspecialistaAutorizadoOrOther(email:string):Promise<boolean>{
    let retorno = true;
    let user = await this.userService.getUserByEmail(email);
    if(user.rol == "especialista"){
       retorno = user.estado == "habilitado" ? true : false;
    }
    if(!retorno){
      this.toast.error("Siendo medico especialista, debe estar autorizado por un admin para entrar");
    }

    return retorno;
}

  easyLogin(user:UserModel){
    this.loginForm.controls['email'].setValue(user.email);
    this.loginForm.controls['password'].setValue(user.password);
  }

  goToRegister=()=> this.router.navigateByUrl('/register');

}