import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show-calificacion-encuesta-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './show-calificacion-encuesta-dialog.component.html',
  styleUrl: './show-calificacion-encuesta-dialog.component.css'
})
export class ShowCalificacionEncuestaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowCalificacionEncuestaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { calificacion: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
