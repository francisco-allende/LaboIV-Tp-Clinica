import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calificacion-encuesta-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule ,MatFormFieldModule, MatButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './calificacion-encuesta-dialog.component.html',
  styleUrl: './calificacion-encuesta-dialog.component.css'
})
export class CalificacionEncuestaDialogComponent {
  calificacion: string = '';

  constructor(public dialogRef: MatDialogRef<CalificacionEncuestaDialogComponent>) { }

  onConfirm(): void {
    if(this.calificacion != ''){
      this.dialogRef.close(this.calificacion);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
