import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-especialidad-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDialogModule, ReactiveFormsModule, MatButtonModule ,MatInputModule],
  templateUrl: './add-especialidad-dialog.component.html',
  styleUrl: './add-especialidad-dialog.component.css'
})
export class AddEspecialidadDialogComponent {

  newEspecialidad: string = '';

  constructor(public dialogRef: MatDialogRef<AddEspecialidadDialogComponent>) { }

  onAdd(): void {
    this.dialogRef.close(this.newEspecialidad);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
