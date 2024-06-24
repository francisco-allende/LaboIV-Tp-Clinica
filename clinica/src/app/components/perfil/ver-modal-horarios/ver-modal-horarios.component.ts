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
  selector: 'app-ver-modal-horarios',
  standalone: true,
  imports: [FormsModule, CommonModule, MatDialogModule, MatButtonModule ,TranslateDayNamePipe ,SetFechaWithSlashesPipe, HorariosAmPmFormatPipe],
  templateUrl: './ver-modal-horarios.component.html',
  styleUrl: './ver-modal-horarios.component.css'
})
export class VerModalHorariosComponent {

  daysData: DayModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<VerModalHorariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toast:ToastrService
  ) {
    this.daysData = data.daysData;
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
