import { Component, Inject, Input } from '@angular/core';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { UserService } from '../../../services/user.service';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions, MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import jsPDF from 'jspdf';
import { UserModel } from '../../../models/user';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-show-historia-clinica',
  standalone: true,
  imports: [MatOption, MatSelectModule, FormsModule, MatFormField, MatLabel, MatIcon, MatDividerModule, CapitalizeFirstLetterPipePipe, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe, MatDialogContent, MatDialogActions ],
  templateUrl: './show-historia-clinica.component.html',
  styleUrl: './show-historia-clinica.component.css'
})
export class ShowHistoriaClinicaComponent {
  
  especialistaSeleccionado: UserModel | undefined;
  especialistas: UserModel[] | null = [];

  constructor(
    public dialogRef: MatDialogRef<ShowHistoriaClinicaComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: UserModel,
    private userService :UserService,
    private turnosService: TurnoService,
    private toast: ToastrService) { 
      this.loadEspecialistas();
    }

    onClose(): void {
      this.dialogRef.close();
    }

    async loadEspecialistas() {
      this.especialistas = await this.userService.getAllEnabledUsersByRol("especialista");
      console.log(this.especialistas)
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
      doc.text(`Nombre del paciente: ${this.paciente.nombre} ${this.paciente.apellido}`, 10, line);
      line += 10;
      doc.text(`DNI: ${this.paciente.dni}`, 10, line);
      line += 10;
      doc.text(`Obra Social: ${this.paciente.obraSocial || '-'}`, 10, line);
      line += 10;
      line += 10;  
  
      // Historia clínica
      doc.text('Historia Clínica:', 10, line);
      line += 10;
  
      if (this.paciente.historiaClinica && this.paciente.historiaClinica.length > 0) {
        this.paciente.historiaClinica.forEach((historia) => {
          doc.text(`Fecha: ${historia.fecha.fecha}`, 15, line);
          line += 10;
          doc.text(`Altura: ${historia.altura} cm`, 15, line);
          line += 10;
          doc.text(`Peso: ${historia.peso} kgs`, 15, line);
          line += 10;
          doc.text(`Temperatura: ${historia.temperatura} ºC`, 15, line);
          line += 10;
          doc.text(`Presión: ${historia.presion}`, 15, line);
          line += 10;
          if (historia.datosDinamicos && historia.datosDinamicos.length > 0) {
            doc.text('Datos Dinámicos:', 15, line);
            line += 10;
            historia.datosDinamicos.forEach((dato) => {
              doc.text(`${dato.key}: ${dato.value}`, 20, line);
              line += 10;
            });
          }
          line += 20;

        });
      } else {
        doc.text('No hay datos de historia clínica disponibles.', 15, line);
        line += 10;
      }
  
      doc.save(`Historia_Clinica_${this.paciente.nombre}_${this.paciente.apellido}.pdf`);
    }

    async descargarPorEspecialistaPDF(){
      let turnos = await this.turnosService.getTurnosFromPaciente(this.paciente.email);

      const turnosFiltrados = turnos?.filter(turno => turno.especialistaId === this.especialistaSeleccionado?.email);

      if (turnosFiltrados?.length === 0) {
        this.toast.info("No hay turnos con el especialista seleccionado")
        return;
      }
      
      const doc = new jsPDF();
      const logoUrl = '../../../../assets/logo.png'; 

      // logo de la clínica
      doc.addImage(logoUrl, 'JPEG', 10, 10, 50, 30);

      // Título del informe
      doc.setFontSize(18);
      doc.text('Informe de Historia Clínica por Especialista', 70, 20);

      // Fecha de emisión
      const fechaEmision = new Date().toLocaleDateString();
      doc.setFontSize(12);
      doc.text(`Fecha de emisión: ${fechaEmision}`, 70, 30);

      // Información del paciente
      let line = 50;
      doc.text(`Nombre Paciente: ${this.paciente.nombre} ${this.paciente.apellido}`, 10, line);
      line += 10;
      doc.text(`DNI: ${this.paciente.dni}`, 10, line);
      line += 10;
      doc.text(`Obra Social: ${this.paciente.obraSocial || '-'}`, 10, line);
      line += 20;

      // Información de los turnos filtrados
      doc.text('Turnos:', 10, line);
      line += 10;
      turnosFiltrados?.forEach(turno => {
        const especialista = this.especialistas?.find(especialista => especialista.email === turno.especialistaId);
        const nombreEspecialista = especialista ? `${especialista.nombre} ${especialista.apellido}` : 'Desconocido';
        doc.text(`Fecha: ${turno.fecha.fecha}`, 10, line);
        line += 10;
        doc.text(`Especialista: ${nombreEspecialista}`, 10, line);
        line += 10;
        doc.text(`Especialialidad: ${turno.especialidad}`, 10, line);
        line += 10;
        doc.text(`Estado del turno: ${turno.estado}`, 10, line);
        line += 10;
        if(turno.comentario != ''){
          doc.text(`Comentario del paciente: ${turno.comentario}`, 10, line);
          line += 10;
        }
        if(turno.resenia != ''){
          doc.text(`Diagnóstico: ${turno.resenia}`, 10, line);
          line += 10;
        }
        line += 10;
      });

      doc.save(`Historia_Clinica_${this.paciente.nombre}_${this.paciente.apellido}_Especialista_${this.especialistaSeleccionado?.nombre}_${this.especialistaSeleccionado?.apellido}.pdf`);
  
    }

}
