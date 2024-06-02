import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-especialista-inputs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './especialista-inputs.component.html',
  styleUrl: './especialista-inputs.component.css'
})
export class EspecialistaInputsComponent {

  imagenPerfilLoaded: boolean = false;
  especialidades: string[] = ['Cardiología', 'Neurología', 'Pediatría', 'Traumatología'];

  @Input() parentForm: FormGroup | any;
  @Input() handleFileInput: (event: Event, imageField: string) => void = () => {};

  @Output() valuesEmitter = new EventEmitter<any>();

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }

  checkLoaded(){
    let img = this.parentForm.get('imagenPerfil')?.value;
    if(img != ""){
      this.imagenPerfilLoaded = true;
    }
  }
}
