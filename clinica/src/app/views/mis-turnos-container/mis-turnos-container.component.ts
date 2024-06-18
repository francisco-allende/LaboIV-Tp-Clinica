import { Component } from '@angular/core';
import { MisTurnosComponent } from '../../components/turnos/mis-turnos/mis-turnos.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-mis-turnos-container',
  standalone: true,
  imports: [MisTurnosComponent, NavbarComponent, FooterComponent],
  templateUrl: './mis-turnos-container.component.html',
  styleUrl: './mis-turnos-container.component.css'
})
export class MisTurnosContainerComponent {

}
