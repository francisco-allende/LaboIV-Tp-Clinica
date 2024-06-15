import { Component } from '@angular/core';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { TurnoService } from '../../../services/turno.service';
import { UserModel } from '../../../models/user';
import { TurnoModel } from '../../../models/turno';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitar-turno',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './solicitar-turno.component.html',
  styleUrl: './solicitar-turno.component.css'
})
export class SolicitarTurnoComponent {

  loading:boolean = true;
  pacientes:UserModel[] | null = [];
  medicos:UserModel[] | null = [];
  selectedMedico:UserModel | null = null;
  selectedEspecialidad:string = '';
  selectedPaciente:UserModel | null = null;
  selectedHorario:Date | string = '';
  currentRol:string | undefined = '';
  mySelf:UserModel | null = null;

  constructor(private userService: UserService, 
              private loginService:LoginService, 
              private turnoService: TurnoService,
              private toast: ToastrService) {}

  ngOnInit(){
    this.getData();
  }

  async getData(){
    try{
      this.medicos = await this.userService.getAllEnabledUsersByRol('especialista');
      let email = this.loginService.getLoggedUser().value;
      this.mySelf = await this.userService.getUserByEmail(email);
      this.currentRol = this.mySelf?.rol;
      
      if(this.currentRol == "admin"){
        this.pacientes = await this.userService.getAllEnabledUsersByRol('paciente');
      }
    }catch(error){
      console.log(error);
    }finally{
      this.loading = false;
    }
  
  }

  chooseMedico = (medico:UserModel) => this.selectedMedico = medico;
  
  chooseEspecialidad = (especialidad:string) => this.selectedEspecialidad = especialidad;
  
  choosePaciente = (paciente:UserModel) => this.selectedPaciente = paciente;

  chooseHorario = (horario:string | Date) => this.selectedHorario = horario;

  isValid():boolean  {
    if(this.selectedMedico && this.selectedEspecialidad && this.selectedPaciente && this.selectedHorario){

      let hasSpeciality:boolean = false;
      this.selectedMedico.especialidad?.forEach(x=> {
        if(x.toLowerCase() == this.selectedEspecialidad.toLowerCase()){
          hasSpeciality = true;
        }
      })

      let hasHorario:boolean = false;
      this.selectedMedico.horarios?.forEach(x=> {
        if(x.toString().toLowerCase() == this.selectedHorario.toString().toLowerCase()){
          hasHorario = true;
        }
      })

      if(hasSpeciality && hasHorario){
        return true;
      }
    }
    return false;
  }

  solicitar(){
    if(this.isValid()){
      try{
        this.turnoService.altaTurno(this.setTurno());
        this.toast.success('Turno cargado con éxito! Ya podes visualizarlo en la sección Mis Turnos')
      }catch(error){
        console.log(error)
      }
    }
  }

  setTurno():TurnoModel{
    const turno:TurnoModel = {
      id: `${this.selectedPaciente?.email}_${this.selectedMedico?.email}_${this.selectedHorario.toString()}`,
      fecha: this.selectedHorario,
      especialistaId: this.selectedMedico?.email ? this.selectedMedico?.email : '',
      pacienteId: this.selectedPaciente?.email ? this.selectedPaciente?.email : '',
      especialidad: this.selectedEspecialidad,
      estado: 'pendiente', 
      comentario: '',
      reseña: ''
    }
    return turno;
  }



}
