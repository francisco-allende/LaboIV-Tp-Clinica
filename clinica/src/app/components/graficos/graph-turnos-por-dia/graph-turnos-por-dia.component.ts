import { Component, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';
import { DayModel } from '../../../models/day';

@Component({
  selector: 'app-graph-turnos-por-dia',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graph-turnos-por-dia.component.html',
  styleUrl: './graph-turnos-por-dia.component.css'
})
export class GraphTurnosPorDiaComponent {

  barChartLabels: string[] = [];
  barChartData: any[] = [
    { data: [], label: 'Cantidad de Turnos por día' }
  ];
  barChartOptions = {
    responsive: true,
    width:"400px", 
    height:"200px",
    backgroundColor: '#ffa420',
    fill:true,
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
    const turnosPorDia: { [key: string]: { fecha: string, cantidad: number }[] } = {};
  
    this.turnos.forEach(turno => {
      const fecha = turno.fecha.fecha; 
      const dia = turno.fecha.dayName;
  
      if (!turnosPorDia[dia]) {
        turnosPorDia[dia] = [];
      }
  
      const existingEntry = turnosPorDia[dia].find(entry => entry.fecha === fecha);
      if (existingEntry) {
        existingEntry.cantidad++;
      } else {
        turnosPorDia[dia].push({ fecha: fecha, cantidad: 1 });
      }
    });
  
    this.updateChart(turnosPorDia);
  }
  
order(a:string, b:string):number{
  const regex = /^(\d{2})-(\d{2})-(\d{4})$/;

  // Extraer los componentes de la fecha para a
  const matchA = a.match(regex);
  const dayA = matchA ? parseInt(matchA[1], 10) : 0; // Convertir a número o asignar 0 si no hay coincidencia
  const monthA = matchA ? parseInt(matchA[2], 10) : 0; // Convertir a número o asignar 0 si no hay coincidencia
  const yearA = matchA ? parseInt(matchA[3], 10) : 0; // Convertir a número o asignar 0 si no hay coincidencia

  // Extraer los componentes de la fecha para b
  const matchB = b.match(regex);
  const dayB = matchB ? parseInt(matchB[1], 10) : 0; // Convertir a número o asignar 0 si no hay coincidencia
  const monthB = matchB ? parseInt(matchB[2], 10) : 0; // Convertir a número o asignar 0 si no hay coincidencia
  const yearB = matchB ? parseInt(matchB[3], 10) : 0; // Convertir a número o asignar 0 si no hay coincidencia

  // Comparar primero por año, luego por mes y finalmente por día
  if (yearA !== yearB) {
    return yearA - yearB;
  }
  if (monthA !== monthB) {
    return monthA - monthB;
  }
  return dayA - dayB;
}

  updateChart(turnosPorDia: { [key: string]: { fecha: string, cantidad: number }[] }) {
    const uniqueDates = new Set<string>();
    const dataSets = Object.entries(turnosPorDia).map(([day, entries]) => {
      const labels = entries.map(entry => entry.fecha);
      const data = entries.map(entry => entry.cantidad);
  
      entries.forEach(entry => uniqueDates.add(entry.fecha));
  
      return { labels, data };
    });
  
    const sortedDates = Array.from(uniqueDates).sort((a, b) => this.order(a, b));



    this.barChartLabels = sortedDates;
  
    this.barChartData = [{
      data: this.fillDataWithZero(sortedDates, dataSets.flatMap(dataSet => dataSet.data), sortedDates),
      label: 'Turnos por día'
    }];
  }
  

fillDataWithZero(labels: string[], data: number[], sortedDates: string[]): number[] {
  return sortedDates.map(date => {
    const index = labels.indexOf(date);
    return index !== -1 ? data[index] : 0;
  });
}

  
  downloadPDF() {
    try{
      const pdf = new jsPDF.default();
      const base64Image = this.chart?.toBase64Image();
      
      if(base64Image){
        pdf.addImage(base64Image, 'PNG', 10, 10, 180, 160);
        pdf.save('grafico_turnos_por_dia.pdf');
      }else{
        this.toast.error("No se puedo descargar el PDF")
      }
    }catch(error){
      console.log(error)
    }
  }
}
