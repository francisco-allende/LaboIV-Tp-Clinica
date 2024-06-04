import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-email',
  standalone: true,
  imports: [],
  templateUrl: './enviar-email.component.html',
  styleUrl: './enviar-email.component.css'
})
export class EnviarEmailComponent {

  user: any = this.loginService.getLoggedUser();

  constructor(private loginService:LoginService, public ruta: Router) {}
}
