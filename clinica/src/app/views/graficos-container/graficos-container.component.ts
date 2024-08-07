import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LogsComponent } from '../../components/graficos/logs/logs.component';
import { GrafTurnosPorEspecialidadComponent } from '../../components/graficos/graf-turnos-por-especialidad/graf-turnos-por-especialidad.component';
import { GraphTurnosPorDiaComponent } from '../../components/graficos/graph-turnos-por-dia/graph-turnos-por-dia.component';
import { GraphTurnosPorMedicoLapsoTiempoComponent } from '../../components/graficos/graph-turnos-por-medico-lapso-tiempo/graph-turnos-por-medico-lapso-tiempo.component';

@Component({
  selector: 'app-graficos-container',
  standalone: true,
  imports: [LogsComponent,GraphTurnosPorDiaComponent, GraphTurnosPorMedicoLapsoTiempoComponent,  NavbarComponent, FooterComponent, GrafTurnosPorEspecialidadComponent],
  templateUrl: './graficos-container.component.html',
  styleUrl: './graficos-container.component.css'
})
export class GraficosContainerComponent {
  filterByFinalizados:boolean = false;
  label:string = '';
  pdfName = '';
}
