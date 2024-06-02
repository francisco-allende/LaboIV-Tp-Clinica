import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paciente-inputs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './paciente-inputs.component.html',
  styleUrl: './paciente-inputs.component.css'
})
export class PacienteInputsComponent {

  @Input() parentForm: FormGroup | any;
  @Input() handleFileInput: (event: Event, imageField: string) => void = () => {};

  @Output() valuesEmitter = new EventEmitter<any>();

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }
}
