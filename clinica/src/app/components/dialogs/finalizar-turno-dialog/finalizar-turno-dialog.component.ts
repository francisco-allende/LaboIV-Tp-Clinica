import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { TurnoModel } from '../../../models/turno';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-finalizar-turno-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatInputModule ,MatFormFieldModule, MatButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './finalizar-turno-dialog.component.html',
  styleUrl: './finalizar-turno-dialog.component.css'
})
export class FinalizarTurnoDialogComponent {
  
  resenia: string = '';
  altura: number | null = null;
  peso: number | null = null;
  temperatura: number | null = null;
  presion: string = '';
  datosDinamicos: { key: string, value: string }[] = [{ key: '', value: '' }];

  constructor(public dialogRef: MatDialogRef<FinalizarTurnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { turno: TurnoModel },
    private toast:ToastrService) { }

  onConfirm(): void {
    if(this.resenia !== '' && this.altura !== null && this.peso !== null && this.temperatura !== null && this.presion !== '') {
      const historiaClinica: HistoriaClinicaModel = {
        fecha: this.data.turno.fecha,
        altura: this.altura,
        peso: this.peso,
        temperatura: this.temperatura,
        presion: this.presion,
        datosDinamicos: this.datosDinamicos.filter(d => d.key !== '' && d.value !== '') 
      };
      this.dialogRef.close({ historiaClinica, resenia: this.resenia });
    }else{
      this.toast.error("Los campos de reseña, altura, peso, tempratura y presión son obligatorios")
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  addDatoDinamico() {
    if (this.datosDinamicos.length < 3) {
      this.datosDinamicos.push({ key: '', value: '' });
    }
  }

  removeDatoDinamico(index: number) {
    if (this.datosDinamicos.length > 1) {
      this.datosDinamicos.splice(index, 1);
    }
  }
}

