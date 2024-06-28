import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graf-turnos-por-especialidad',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graf-turnos-por-especialidad.component.html',
  styleUrl: './graf-turnos-por-especialidad.component.css'
})
export class GrafTurnosPorEspecialidadComponent {
  lineChartData = {
    labels: ["Lun", "Mar", "Mier", "Jue", "Vier", "Sab", "Dom"],
    datasets:[
      {
        data:[89, 34 ,43, 54, 26, 74, 93],
        label:'Turnso por dia'
      }
    ]
  }
}
