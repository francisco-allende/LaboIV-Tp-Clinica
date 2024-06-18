import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rechazar-turno-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule ,MatFormFieldModule, MatButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rechazar-turno-dialog.component.html',
  styleUrl: './rechazar-turno-dialog.component.css'
})
export class RechazarTurnoDialogComponent {
  rechazoReason: string = '';

  constructor(public dialogRef: MatDialogRef<RechazarTurnoDialogComponent>) { }

  onConfirm(): void {
    if(this.rechazoReason != ''){
      this.dialogRef.close(this.rechazoReason);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
