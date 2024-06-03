import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { EspecialidadesService } from '../../../services/especialidades.service';

@Component({
  selector: 'app-especialista-inputs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './especialista-inputs.component.html',
  styleUrl: './especialista-inputs.component.css'
})
export class EspecialistaInputsComponent {

  especialidades: string[] = [];

  @Input() parentForm: FormGroup | any;
  @Output() valuesEmitter = new EventEmitter<any>();

  constructor(private especialidadService: EspecialidadesService) {}

  ngOnInit(){
    this.especialidadService.getAllEspecialidades().subscribe(data =>{
      this.especialidades = data;
    })
  }

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }
}
