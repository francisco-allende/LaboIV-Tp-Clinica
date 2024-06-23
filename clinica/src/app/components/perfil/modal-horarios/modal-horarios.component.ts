import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import moment from 'moment';

interface Day {
  name: string;
  value: string;
  desde: string;
  hasta: string;
  fecha: string;
}

@Component({
  selector: 'app-modal-horarios',
  standalone: true,
  imports: [FormsModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-horarios.component.html',
  styleUrl: './modal-horarios.component.css'
})
export class ModalHorariosComponent {

  //@Input() daysData: any[] = [];
  @Output() serviceHoursUpdated = new EventEmitter<any>();

  daysData: Day[] = [
    { name: 'Lunes', value: 'lunes', desde: '', hasta: '', fecha: '' },
    { name: 'Martes', value: 'martes', desde: '', hasta: '', fecha: '' },
    { name: 'Miércoles', value: 'miercoles', desde: '', hasta: '', fecha: '' },
    { name: 'Jueves', value: 'jueves', desde: '', hasta: '', fecha: '' },
    { name: 'Viernes', value: 'viernes', desde: '', hasta: '', fecha: '' },
    { name: 'Sábado', value: 'sabado', desde: '', hasta: '', fecha: '' },
    { name: 'Domingo', value: 'domingo', desde: '', hasta: '', fecha: '' }
  ];

  validDates: string[] = [];
  validTimes: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalHorariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.generateValidDates();
    this.generateValidTimes();
  }

  generateValidDates(): void {
    const today = moment();
    for (let i = 0; i <= 15; i++) {
      this.validDates.push(today.clone().add(i, 'days').format('DD-MM-YYYY'));
    }
  }

  generateValidTimes(): void {
    const startTime = moment('07:00', 'HH:mm');
    const endTime = moment('18:00', 'HH:mm');

    while (startTime <= endTime) {
      this.validTimes.push(startTime.format('HH:mm'));
      startTime.add(30, 'minutes');
    }
  }

  onDateChange(selectedDay: Day) {
      
    let fecha = selectedDay.fecha;

    const dayOfWeek = moment(fecha).format('dddd');
  

    console.log(selectedDay, dayOfWeek);
  }

  actualizarHorarios() {
    console.log(this.daysData);
    this.serviceHoursUpdated.emit(this.daysData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
