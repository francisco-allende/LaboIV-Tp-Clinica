import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faPlusSquare, faPowerOff, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faPowerOff = faPowerOff;
  faUser = faUser;
  faSearch = faSearch;
  faPlusSquare = faPlusSquare;
  faArrowLeft = faArrowLeft;
  currentRoute: string = '';

  currentUser:string = this.loginService.getLoggedUser() ;
  @Output() sendCurrentUser:EventEmitter<string> = new EventEmitter<string>

  constructor(private loginService: LoginService, 
              public router: Router) {}

  ngOnInit(){
    if(this.loginService.getLoggedUser() == ''){
      this.logOut();
    }else{
      this.sendCurrentUser.emit(this.currentUser);
    }
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
  }

  goBack(){
    this.currentRoute = this.router.url;
    if (this.currentRoute.includes('home')) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
