import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SolicitarTurnoComponent } from '../../components/solicitar-turno/solicitar-turno.component';

@Component({
  selector: 'app-solicitar-turno-container',
  standalone: true,
  imports: [SolicitarTurnoComponent, NavbarComponent, FooterComponent],
  templateUrl: './solicitar-turno-container.component.html',
  styleUrl: './solicitar-turno-container.component.css'
})
export class SolicitarTurnoContainerComponent {

}
