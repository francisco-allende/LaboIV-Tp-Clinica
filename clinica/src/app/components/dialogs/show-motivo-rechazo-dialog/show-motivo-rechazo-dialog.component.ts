import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show-motivo-rechazo-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './show-motivo-rechazo-dialog.component.html',
  styleUrl: './show-motivo-rechazo-dialog.component.css'
})
export class ShowMotivoRechazoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowMotivoRechazoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { motivo: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
