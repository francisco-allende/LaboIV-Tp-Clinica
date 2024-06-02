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

  imagenPerfilLoadedFirst: boolean = false;
  imagenPerfilLoadedSecond: boolean = false;
  
  @Input() parentForm: FormGroup | any;
  @Input() handleFileInput: (event: Event, imageField: string) => void = () => {};

  @Output() valuesEmitter = new EventEmitter<any>();

  onValueChange() {
    this.valuesEmitter.emit(this.parentForm.value);
  }

  checkLoaded(val:string){
    let img = this.parentForm.get(val)?.value;
    if(img != ""){
      if(img == "imagenPerfil1"){
        this.imagenPerfilLoadedFirst = true;
      }else{
        this.imagenPerfilLoadedSecond = true;
      }
    }
  }
}
