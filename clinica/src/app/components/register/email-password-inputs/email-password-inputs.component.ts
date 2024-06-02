import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-password-inputs',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './email-password-inputs.component.html',
  styleUrl: './email-password-inputs.component.css'
})
export class EmailPasswordInputsComponent {
  @Input() parentForm: FormGroup | any;
  @Output() valuesEmitter = new EventEmitter<any>();

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }
}
