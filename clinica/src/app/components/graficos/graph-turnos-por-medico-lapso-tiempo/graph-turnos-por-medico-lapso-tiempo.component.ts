import { Component, ViewChild, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-graph-turnos-por-medico-lapso-tiempo',
  standalone: true,
  imports: [BaseChartDirective, FormsModule, ],
  templateUrl: './graph-turnos-por-medico-lapso-tiempo.component.html',
  styleUrls: ['./graph-turnos-por-medico-lapso-tiempo.component.css']
})
export class GraphTurnosPorMedicoLapsoTiempoComponent {
  
  @Input() filterByFinalizados: boolean = false;
  @Input() label: string = '';
  @Input() pdfName: string = '';

  barChartLabels: string[] = [];
  barChartData: any[] = [
    { data: [], label: this.label }
  ];
  barChartOptions = {
    responsive: true,
    width:"400px", 
    height:"200px",
    backgroundColor: 'lightgreen',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  contadorVeces = 0;
  isFirstTime:boolean = true;
  turnos: TurnoModel[] = [];
  startDate: Date | undefined;
  endDate: Date | undefined;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  constructor(private toast: ToastrService, private turnosService: TurnoService) {
    const { start, end } = this.getThisMonthRange();
    this.startDate = start;
    this.endDate = end;
  }

  ngOnInit() {
    this.turnosService.getAllTurnos().subscribe(t => {
      this.turnos = t;
      this.filterData();
    });
  }

  getThisMonthRange(): { start: Date, end: Date } {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1); 
    return { start, end };
  }

  parseDate(fecha: string): Date {
    const [day, month, year] = fecha.split('-').map(part => parseInt(part, 10));
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      return new Date(year, month - 1, day);
    }
    
    return new Date('min');
  }

  filterData() {
    const start = this.startDate ? new Date(this.startDate) : new Date('1970-01-01');
    const end = this.endDate ? new Date(this.endDate) : new Date();

    let filteredTurnos = this.turnos.filter(turno => {
      const turnoDate = this.parseDate(turno.fecha.fecha);
      return turnoDate >= start && turnoDate <= end;
    });

    if(this.filterByFinalizados){
      filteredTurnos = filteredTurnos.filter(t=> t.estado == 'finalizado')
    }

    const turnosPorMedico = filteredTurnos.reduce((acc: { [key: string]: number }, turno) => {
      if (turno.especialistaId) {
        acc[turno.especialistaId] = (acc[turno.especialistaId] || 0) + 1;
      }
      return acc;
    }, {} as { [key: string]: number });

   
    this.showInitialMessage()

    this.updateChart(turnosPorMedico);
  }

  updateChart(turnosPorMedico: { [key: string]: number }) {
    const sortedData = Object.entries(turnosPorMedico)
      .sort((a, b) => a[1] - b[1]);

    this.barChartLabels = sortedData.map(entry => entry[0]);
    this.barChartData = [
      { data: sortedData.map(entry => entry[1]), label: this.label }
    ];

    this.chart?.update();
  }

  downloadPDF() {
    try {
      const pdf = new jsPDF.default();
      const base64Image = this.chart?.toBase64Image();

      if (base64Image) {
        pdf.addImage(base64Image, 'PNG', 10, 10, 180, 160);
        pdf.save(this.pdfName);
      } else {
        this.toast.error("No se pudo descargar el PDF");
      }
    } catch (error) {
      console.log(error);
    }
  }

  showInitialMessage(){
    if(this.isFirstTime){
      this.contadorVeces++;
      if(this.contadorVeces > 1){
        this.isFirstTime = false;
      }
    }
  }
}
