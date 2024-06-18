import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  loading:boolean = true;
  currentRol:string | undefined = '';
  mySelf:UserModel | null = null;

  constructor(public router:Router, private loginService: LoginService, private userService: UserService) {}

  ngOnInit(){
    this.getData();
  }
    
  async getData(){
    try{
      let email = this.loginService.getLoggedUser();
      this.mySelf = await this.userService.getUserByEmail(email);
      this.currentRol = this.mySelf?.rol;
    }catch(error){
      console.log(error);
    }finally{
      this.loading = false;
    }
  }
}
