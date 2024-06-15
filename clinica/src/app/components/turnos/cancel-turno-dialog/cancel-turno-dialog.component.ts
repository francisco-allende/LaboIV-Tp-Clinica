import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cancel-turno-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule ,MatFormFieldModule, MatButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cancel-turno-dialog.component.html',
  styleUrl: './cancel-turno-dialog.component.css'
})
export class CancelTurnoDialogComponent {
  cancelReason: string = '';

  constructor(public dialogRef: MatDialogRef<CancelTurnoDialogComponent>) { }

  onConfirm(): void {
    this.dialogRef.close(this.cancelReason);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
