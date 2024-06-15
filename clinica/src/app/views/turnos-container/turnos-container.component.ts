import { Component } from '@angular/core';
import { ListarTurnosComponent } from '../../components/turnos/listar-turnos/listar-turnos.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-turnos-container',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent, ListarTurnosComponent],
  templateUrl: './turnos-container.component.html',
  styleUrl: './turnos-container.component.css'
})
export class TurnosContainerComponent {

}
