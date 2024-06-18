import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show-resenia-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './show-resenia-dialog.component.html',
  styleUrl: './show-resenia-dialog.component.css'
})
export class ShowReseniaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowReseniaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { resenia: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
