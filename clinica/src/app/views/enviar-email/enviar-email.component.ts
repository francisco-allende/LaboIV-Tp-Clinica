import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-email',
  standalone: true,
  imports: [],
  templateUrl: './enviar-email.component.html',
  styleUrl: './enviar-email.component.css'
})
export class EnviarEmailComponent {

  constructor(public ruta: Router) {}
}
