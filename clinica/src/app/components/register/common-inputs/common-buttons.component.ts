import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-inputs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './common-inputs.component.html',
  styleUrl: './common-inputs.component.css'
})
export class CommonInputsComponent {

  @Input() parentForm: FormGroup | any;
  @Output() valuesEmitter = new EventEmitter<any>();

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }
}
