import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show-motivo-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './show-motivo-dialog.component.html',
  styleUrl: './show-motivo-dialog.component.css'
})
export class ShowMotivoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowMotivoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { motivo: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
