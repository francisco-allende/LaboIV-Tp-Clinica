import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { EspecialidadesService } from '../../../services/especialidades.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { AddEspecialidadDialogComponent } from '../add-especialidad-dialog/add-especialidad-dialog.component';

@Component({
  selector: 'app-especialista-inputs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatInputModule],
  templateUrl: './especialista-inputs.component.html',
  styleUrl: './especialista-inputs.component.css'
})
export class EspecialistaInputsComponent {

  especialidades: string[] = [];
  showModal: boolean = false;

  @Input() parentForm: FormGroup | any;
  @Output() valuesEmitter = new EventEmitter<any>();

  constructor(private especialidadService: EspecialidadesService,public dialog: MatDialog, ) {}

  ngOnInit(){
    this.especialidadService.getAllEspecialidades().subscribe(data =>{
      this.especialidades = data;
    })
  }

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }

  addEspecialidad(): void {
    const dialogRef = this.dialog.open(AddEspecialidadDialogComponent);
    try{
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.especialidadService.altaEspecialidad(result);
        }
      });
    }catch(error){
      console.log("No se pudo hacer el alta de especialdiad ", error);
    }
  }
}
