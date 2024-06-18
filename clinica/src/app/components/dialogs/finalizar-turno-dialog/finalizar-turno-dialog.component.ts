import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-finalizar-turno-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule ,MatFormFieldModule, MatButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './finalizar-turno-dialog.component.html',
  styleUrl: './finalizar-turno-dialog.component.css'
})
export class FinalizarTurnoDialogComponent {
  
  resenia: string = '';

  constructor(public dialogRef: MatDialogRef<FinalizarTurnoDialogComponent>) { }

  onConfirm(): void {
    if(this.resenia !== '') {
      this.dialogRef.close({ resenia: this.resenia });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

