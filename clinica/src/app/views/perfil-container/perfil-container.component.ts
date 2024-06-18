import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MiPerfilComponent } from '../../components/perfil/mi-perfil/mi-perfil.component';

@Component({
  selector: 'app-perfil-container',
  standalone: true,
  imports: [MiPerfilComponent, NavbarComponent, FooterComponent],
  templateUrl: './perfil-container.component.html',
  styleUrl: './perfil-container.component.css'
})
export class PerfilContainerComponent {

}
