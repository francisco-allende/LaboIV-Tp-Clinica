import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import moment from 'moment';
import { TranslateDayNamePipe } from '../../../pipes/translate-day-name.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { ToastrService } from 'ngx-toastr';
import { DayModel } from '../../../models/day';

@Component({
  selector: 'app-modal-horarios',
  standalone: true,
  imports: [FormsModule, CommonModule, MatDialogModule, MatButtonModule ,TranslateDayNamePipe ,SetFechaWithSlashesPipe, HorariosAmPmFormatPipe],
  templateUrl: './modal-horarios.component.html',
  styleUrl: './modal-horarios.component.css'
})
export class ModalHorariosComponent {

  @Output() serviceHoursUpdated = new EventEmitter<any>();
  daysData: DayModel[] = [];
  validTimes: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalHorariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toast:ToastrService
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.daysData) {
      this.daysData = this.data.daysData;
      this.generateValidTimes();
    }
  }

  generateValidTimes(): void {
    const startTime = moment('07:00', 'HH:mm');
    const endTime = moment('18:00', 'HH:mm');

    this.validTimes.push('');
    
    while (startTime <= endTime) {
      this.validTimes.push(startTime.format('HH:mm'));
      startTime.add(30, 'minutes');
    }
  }

  actualizarHorarios() {
    if(this.isValid()){
      this.serviceHoursUpdated.emit(this.daysData);
      this.dialogRef.close(this.daysData);
    }
  }

  isValid():boolean{
    let retorno = true;
    this.daysData.forEach(day=>{
      
      //Valido que todo desde tenga su hasta y viceversa
      if(day.desde != ''){
        if(day.hasta == ''){
          this.toast.error('Todo rango de turnos necesita un horario de inicio y finalización completos')
          retorno = false;
        }
      }
      if(day.hasta != ''){
        if(day.desde == ''){
          this.toast.error('Todo rango de turnos necesita un desde y hasta completo')
          retorno = false;
        }
      }

      if (day.desde !== '' && day.hasta !== '') {
        // Valido que desde no sea mayor a hasta
        const desdeMoment = moment(day.desde, 'HH:mm');
        const hastaMoment = moment(day.hasta, 'HH:mm');
        if (desdeMoment.isAfter(hastaMoment)) {
          this.toast.error('El horario de inicio no puede ser posterior al horario de finalización');
          retorno = false;
        }
  
        // Valido que desde no sea igual a hasta
        if (day.desde === day.hasta) {
          this.toast.error('Todo rango de turnos necesita un horario de inicio y finalización completos');
          retorno = false;
        }
      }
    })

    
    return retorno;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
