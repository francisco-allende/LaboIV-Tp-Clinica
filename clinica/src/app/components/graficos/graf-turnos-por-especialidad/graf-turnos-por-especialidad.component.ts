import { Component, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';

@Component({
  selector: 'app-graf-turnos-por-especialidad',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graf-turnos-por-especialidad.component.html',
  styleUrl: './graf-turnos-por-especialidad.component.css'
})
export class GrafTurnosPorEspecialidadComponent {

  barChartLabels: string[] = [];
  barChartData: any[] = [
    { data: [], label: 'Cantidad de Turnos según especialidad' }
  ];
  barChartOptions = {
    responsive: true,
    width:"400px", 
    height:"200px",
    backgroundColor: '#0cb7f2'
  };

  turnos:TurnoModel[] = [];
  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  constructor(private toast:ToastrService, private turnosService:TurnoService){}

  ngOnInit(){
    this.turnosService.getAllTurnos().subscribe(t=>{
      this.turnos = t;
      this.filterData()
    })
  }
  
  filterData() {
    const turnosPorEspecialidad = this.turnos.reduce((acc: { [key: string]: number }, turno) => {
      if (turno.especialidad) {
        acc[turno.especialidad] = (acc[turno.especialidad] || 0) + 1;
      }
      return acc;
    }, {} as { [key: string]: number });
  
    this.updateChart(turnosPorEspecialidad);
  }
  

  updateChart(turnosPorEspecialidad: { [key: string]: number }) {

    const sortedData = Object.entries(turnosPorEspecialidad)
    .sort((a, b) => a[1] - b[1]);

    this.barChartLabels = sortedData.map(entry => entry[0]);
    this.barChartData = [
      { data: sortedData.map(entry => entry[1]), label: 'Cantidad de Turnos según especialidad' }
    ]
  }
  
  downloadPDF() {
    try{
      const pdf = new jsPDF.default();
      const base64Image = this.chart?.toBase64Image();
      
      if(base64Image){
        pdf.addImage(base64Image, 'PNG', 10, 10, 180, 160);
        pdf.save('grafico_turnos_por_especialidad.pdf');
      }else{
        this.toast.error("No se puedo descargar el PDF")
      }
    }catch(error){
      console.log(error)
    }
  
  }
}
