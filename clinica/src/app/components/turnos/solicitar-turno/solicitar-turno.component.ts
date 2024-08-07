import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { TurnoService } from '../../../services/turno.service';
import { UserModel } from '../../../models/user';
import { TurnoModel } from '../../../models/turno';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadesService } from '../../../services/especialidades.service';
import { DayModel, TimeSlot } from '../../../models/day';
import moment from 'moment';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { TranslateDayNamePipe } from '../../../pipes/translate-day-name.pipe';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';
import { ResaltarDirective } from '../../../directives/resaltar.directive';


@Component({
  selector: 'app-solicitar-turno',
  standalone: true,
  imports: [ResaltarDirective ,SpinnerComponent, CommonModule, TranslateDayNamePipe ,SetFechaWithSlashesPipe, HorariosAmPmFormatPipe ,CapitalizeFirstLetterPipePipe],
  templateUrl: './solicitar-turno.component.html',
  styleUrl: './solicitar-turno.component.css'
})
export class SolicitarTurnoComponent {

  loading:boolean = true;
  timeLoading:boolean = false;
  pacientes:UserModel[] | null = [];
  medicos:UserModel[] | null = [];
  especialidades: string [] | null = []; 
  selectedMedico:UserModel | null = null;
  selectedEspecialidad:string = '';
  selectedPaciente:UserModel | null = null;
  selectedDia: DayModel | null = null;
  selectedHorario: TimeSlot | null = null;
  horariosDisponiblesByMedico: DayModel[] = [];
  dias: string[] = [];
  horariosFiltrados: any[] = [];
  timeSlotsDisponibles:TimeSlot[] = [];

  currentRol:string | undefined = '';
  mySelf:UserModel | null = null;

  especialidadesConImagen: { [key: string]: string } = {
    'traumatología': '../../../../assets/traumatologia.png',
    'neurología': '../../../../assets/neurologia.png',
    'oftalmología': '../../../../assets/oftalmologia.jpg',
    'cardiología': '../../../../assets/cardiologia.jpg',
    'pediatría': '../../../../assets/pediatria.jpg',
    'default': '../../../../assets/cruz-roja.jpg'
  };

  

  constructor(private userService: UserService, 
              private loginService:LoginService, 
              private turnoService: TurnoService,
              private especialidadService: EspecialidadesService,
              private toast: ToastrService) {}

  ngOnInit(){
    this.getData();
    this.especialidadService.getAllEspecialidades().subscribe(data =>{
      this.especialidades = data;
    })
  }

  async getData(){
    try{
      this.medicos = await this.userService.getAllEnabledUsersByRol('especialista');
      let email = this.loginService.getLoggedUser();
      this.mySelf = await this.userService.getUserByEmail(email);
      this.currentRol = this.mySelf?.rol;
      
      if(this.currentRol == "admin"){
        this.pacientes = await this.userService.getAllEnabledUsersByRol('paciente');
      }
      if(this.currentRol == "paciente"){
        this.selectedPaciente = this.mySelf;
      }
      
    }catch(error){
      console.log(error);
    }finally{
      this.loading = false;
    }
  }

  getMedicosPorEspecialidad(especialidad: string): UserModel[] | undefined {

    if (!this.medicos || !this.selectedEspecialidad) {
      return undefined;
    }
  
    const especialidadLower = this.selectedEspecialidad.toLowerCase();

    const medicosFiltrados = this.medicos.filter(medico =>
      medico.especialidad?.map(espec => espec.toLowerCase()).includes(especialidadLower)
    );
  
    return medicosFiltrados;
  }

  chooseEspecialidad(especialidad: string): void {
    this.selectedEspecialidad = especialidad;
    this.selectedMedico = null;
    this.selectedDia = null;
    this.selectedHorario = null;
    this.horariosDisponiblesByMedico = [];
  }

  chooseMedico(medico: UserModel): void {
    this.selectedMedico = medico;
    this.selectedDia = null;
    this.selectedHorario = null;
    if(medico && medico.horarios){
      this.horariosDisponiblesByMedico = medico.horarios.filter(horario => {
        const horarioFecha = moment(horario.fecha, 'DD-MM-YYYY'); 
        const today = moment().startOf('day'); 
        return horario.estaDisponible && horarioFecha.isSameOrAfter(today);
      });
    }
  }

  async chooseDia(dia: DayModel) {
    this.selectedDia = dia;
    this.selectedHorario = null;
    this.timeSlotsDisponibles = await this.getHorariosPorDia(this.selectedDia);
  }

  chooseHorario(horario: TimeSlot): void {
    this.selectedHorario = horario;
  }

  choosePaciente = (paciente:UserModel) => this.selectedPaciente = paciente;

  getDiasDisponibles(): DayModel[] {
    const diasDisponibles = new Set<DayModel>();
    this.horariosDisponiblesByMedico.forEach(horario => {
      diasDisponibles.add(horario);
    });
    return Array.from(diasDisponibles);
  }

  async getHorariosPorDia(dia: DayModel): Promise<TimeSlot[]> {
    const horario = this.horariosDisponiblesByMedico.find(h => h.fecha === dia.fecha);
  
    return horario && horario.desde && horario.hasta ? this.getHorariosDisponiblesByMedico() : [];
  }

  //Filtro por slots disponibles
  getHorariosDisponiblesByMedico():TimeSlot []{
    let availableTimeSlots: TimeSlot [] = [];

    this.selectedMedico?.horarios?.forEach(h=>{
      if(h.fecha == this.selectedDia?.fecha){
        h.timeSlots?.filter(slot=> slot.estaDisponible ? availableTimeSlots.push(slot) : undefined)
      }
    }) || []

    return availableTimeSlots;
  }
  
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
        if(x.toString().toLowerCase() == this.selectedHorario?.toString().toLowerCase()){
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
      let turn = this.setTurno()

      if(this.currentRol == "paciente" && turn){
        this.mySelf?.turnos?.push(turn.id)
      }

      if(turn){
        this.turnoService.altaTurno(turn);
        this.updateTurnosDisponibles(turn);
        this.toast.success('Turno cargado con éxito! Ya podes visualizarlo en la sección Mis Turnos')
      }
      }catch(error){
        console.log(error)
      }
    }
  }

  setTurno():TurnoModel | null{
    if(this.selectedDia && this.selectedHorario){
     
      this.ocuparHorarioAlMedico();
      this.selectedDia.timeSlot = this.selectedHorario;

      let dateID:string = `${this.selectedDia.dayName}_${this.selectedDia.fecha}_${this.selectedHorario.time}`

      const turno:TurnoModel = {
        id: `${this.selectedPaciente?.email}_${this.selectedMedico?.email}_${dateID}`,
        fecha: this.selectedDia,
        especialistaId: this.selectedMedico?.email ? this.selectedMedico?.email : '',
        pacienteId: this.selectedPaciente?.email ? this.selectedPaciente?.email : '',
        especialidad: this.selectedEspecialidad,
        estado: 'pendiente', 
        comentario: '',
        resenia: '',
        historiaClinica: {
          fecha: this.selectedDia,
          altura: 0,
          peso: 0,
          temperatura: 0,
          presion: '',
          datosDinamicos: []
        }
      }
      return turno;
    }
    return null;
  }

  ocuparHorarioAlMedico(){
    if(this.selectedMedico){
      this.selectedMedico?.horarios?.forEach(h => {
        if (h.fecha === this.selectedDia?.fecha) {
          h.timeSlots?.forEach(slot => {
            if (slot.time === this.selectedHorario?.time) {
              slot.estaDisponible = false;
              this.selectedHorario.estaDisponible = false;
            }
          });
        }
      });
      this.userService.update(this.selectedMedico);
    }
  }

  updateTurnosDisponibles(turn:TurnoModel){
    if (turn && turn.fecha && turn.fecha.timeSlot && turn.fecha.timeSlot) {

      let timeToDelete = turn.fecha.timeSlot.time;
      let index = this.timeSlotsDisponibles.findIndex(slot => slot.time === timeToDelete);
    
      if (index !== -1) {
        this.timeSlotsDisponibles.splice(index, 1);
      }
    }
  }
}
