import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GrafTurnosPorEspecialidadComponent } from '../../components/graficos/graf-turnos-por-especialidad/graf-turnos-por-especialidad.component';
import { LogsComponent } from '../../components/graficos/logs/logs.component';

@Component({
  selector: 'app-graficos-container',
  standalone: true,
  imports: [LogsComponent, NavbarComponent, FooterComponent, GrafTurnosPorEspecialidadComponent],
  templateUrl: './graficos-container.component.html',
  styleUrl: './graficos-container.component.css'
})
export class GraficosContainerComponent {

}
