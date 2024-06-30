import { Component, Inject, Input } from '@angular/core';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions, MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import jsPDF from 'jspdf';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { UserModel } from '../../../models/user';
import { TurnoModel } from '../../../models/turno';

@Component({
  selector: 'app-show-one-hisoria-clinica',
  standalone: true,
  imports: [MatOption, MatSelectModule, FormsModule, MatFormField, MatLabel, MatIcon, MatDividerModule, CapitalizeFirstLetterPipePipe, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe, MatDialogContent, MatDialogActions ],
  templateUrl: './show-one-hisoria-clinica.component.html',
  styleUrl: './show-one-hisoria-clinica.component.css'
})
export class ShowOneHisoriaClinicaComponent {

  constructor(
    public dialogRef: MatDialogRef<ShowOneHisoriaClinicaComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: { paciente: UserModel, historiaClinica: HistoriaClinicaModel, turno:TurnoModel },
    private toast: ToastrService) { }

    onClose(): void {
      this.dialogRef.close();
    }

    descargarHistoriaPDF() {
      const doc = new jsPDF();
      const today = new Date();
      let line = 20;
      const pageHeight = (doc.internal.pageSize.height) - 10;
  
      doc.addImage('../../../../assets/logo.png', 'PNG', 150, 10, 50, 50);
      doc.text(`Fecha de creación: ${today.toLocaleDateString("es-ES")}`, 10, line);
      line += 10;
  
      // Información del paciente
      doc.text(`Nombre del paciente: ${this.data.paciente.nombre} ${this.data.paciente.apellido}`, 10, line);
      line += 10;
      doc.text(`DNI: ${this.data.paciente.dni}`, 10, line);
      line += 10;
      doc.text(`Obra Social: ${this.data.paciente.obraSocial || '-'}`, 10, line);
      line += 10;
      doc.text(`Especialidad del turno: ${this.data.turno.especialidad}`, 10, line);
      line += 10;
      doc.text(`Diagnóstico: ${this.data.turno.resenia}`, 10, line);
      line += 20;  
  
      // Historia clínica
      doc.text('Historia Clínica:', 10, line);
      line += 10;
  
      if (this.data.historiaClinica && this.data.historiaClinica.altura > 0) {
        
          doc.text(`Fecha: ${this.data.historiaClinica.fecha.fecha}`, 15, line);
          line += 10;
          doc.text(`Altura: ${this.data.historiaClinica.altura} cm`, 15, line);
          line += 10;
          doc.text(`Peso: ${this.data.historiaClinica.peso} kgs`, 15, line);
          line += 10;
          doc.text(`Temperatura: ${this.data.historiaClinica.temperatura} ºC`, 15, line);
          line += 10;
          doc.text(`Presión: ${this.data.historiaClinica.presion}`, 15, line);
          line += 10;
          if (this.data.historiaClinica.datosDinamicos && this.data.historiaClinica.datosDinamicos.length > 0) {
            doc.text('Datos Dinámicos:', 15, line);
            line += 10;
            this.data.historiaClinica.datosDinamicos.forEach((dato) => {
              doc.text(`${dato.key}: ${dato.value}`, 20, line);
              line += 10;
            });
          }
          line += 20;
      } else {
        doc.text('No hay datos de historia clínica disponibles.', 15, line);
        line += 10;
      }
  
      doc.save(`Historia_Clinica_${this.data.paciente.nombre}_${this.data.paciente.apellido}.pdf`);
    }
}
