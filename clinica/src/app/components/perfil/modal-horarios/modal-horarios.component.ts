import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-horarios',
  standalone: true,
  imports: [FormsModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-horarios.component.html',
  styleUrl: './modal-horarios.component.css'
})
export class ModalHorariosComponent {

  @Input() daysData: any[] = [];
  @Output() serviceHoursUpdated = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<ModalHorariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onInputValueChange(event: any) {
    // Lógica para manejar cambios en los checkboxes
  }

  actualizarHorarios() {
    // Lógica para actualizar los horarios de atención
    this.serviceHoursUpdated.emit(this.daysData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
