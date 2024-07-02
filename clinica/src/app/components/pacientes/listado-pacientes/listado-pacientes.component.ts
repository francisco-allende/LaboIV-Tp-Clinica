import { Component } from '@angular/core';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { UserModel } from '../../../models/user';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';
import { CommonModule } from '@angular/common';
import { ShowHistoriaClinicaComponent } from '../../dialogs/show-historia-clinica/show-historia-clinica.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ShowMotivoDialogComponent } from '../../dialogs/show-motivo-dialog/show-motivo-dialog.component';
import { ShowReseniaDialogComponent } from '../../dialogs/show-resenia-dialog/show-resenia-dialog.component';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { PaginationComponent } from '../../paginacion/paginacion.component';
import { ShowCalificacionEncuestaDialogComponent } from '../../dialogs/show-calificacion-encuesta-dialog/show-calificacion-encuesta-dialog.component';
import { ShowOneHisoriaClinicaComponent } from '../../dialogs/show-one-hisoria-clinica/show-one-hisoria-clinica.component';
import { CursorPointerDirective } from '../../../directives/cursor-pointer.directive';

@Component({
  selector: 'app-listado-pacientes',
  standalone: true,
  imports: [CursorPointerDirective, PaginationComponent, MatIcon, SpinnerComponent, CommonModule, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe, CapitalizeFirstLetterPipePipe],
  templateUrl: './listado-pacientes.component.html',
  styleUrl: './listado-pacientes.component.css'
})
export class ListadoPacientesComponent {

  mySelf:UserModel | null = null;
  loading:boolean = true;
  loadTurnos:boolean = false;
  turnos: TurnoModel[] | undefined = [];
  pacientes: UserModel[] | undefined = [];
  selectedPaciente: UserModel | undefined;
  selectedPacienteTurnos: TurnoModel[] | undefined = [];
  selectedImages: { [key: string ]: string } = {};
  count:number = 1;
  currentPage: number = 1;
  pageSize: number = 2;

  constructor(private userService: UserService, 
    private loginService:LoginService, 
    private toast: ToastrService,
    private turnoService: TurnoService,
    public dialog: MatDialog){}

    ngOnInit(){
      this.getData();
    }

    async getData(){
      try{
        const email = this.loginService.getLoggedUser();
        this.mySelf = await this.userService.getUserByEmail(email);
        this.turnos = await this.turnoService.getTurnosFromEspecialista(email);

        await this.mapPacientes();
        if(this.pacientes){
          this.count = this.pacientes.length;
        }
      
      }catch(error){
        console.log(error);
      }finally{
        this.loading = false;
      }
    }

    async mapPacientes() {
      const pacientesMap = new Map<string, UserModel>();

      if (this.turnos && this.turnos.length > 0) {
        const pacientesPromises = this.turnos.map(async turno => {
          const paciente = await this.userService.getUserByEmail(turno.pacienteId);
          if (paciente && !pacientesMap.has(paciente.email)) {
            pacientesMap.set(paciente.email, paciente);
          }
        });

        await Promise.all(pacientesPromises);

        this.pacientes = Array.from(pacientesMap.values());

        this.pacientes.forEach(paciente => {
          this.selectedImages[paciente.email] = paciente.mainImg;
        });
      }
    }

    toggleImage(paciente: UserModel) {
      if (this.selectedImages[paciente.email] === paciente.mainImg) {
        if(paciente.extraImg){
          this.selectedImages[paciente.email] = paciente.extraImg;
        }
      } else {
        this.selectedImages[paciente.email] = paciente.mainImg;
      }
    }

    showData(paciente:UserModel){
      this.selectPaciente(paciente);
      //this.verHistoriaClinica(paciente);
    }

    verHistoriaClinica(turno: TurnoModel, historiaClinica:HistoriaClinicaModel) {
      this.dialog.open(ShowOneHisoriaClinicaComponent, {
        width: '600px',
        data: {
          turno: turno,
          paciente: this.selectedPaciente,
          historiaClinica: historiaClinica
        }
      });
  }

  selectPaciente(paciente: UserModel) {
    this.selectedPaciente = paciente;
    this.loadTurnosForPaciente();
  }

  async loadTurnosForPaciente() {
    try {
      this.loadTurnos = true;
      this.selectedPacienteTurnos =  this.turnos?.filter(x=> x.especialistaId == this.mySelf?.email && x.pacienteId == this.selectedPaciente?.email)
    } catch (error) {
      console.log(error);
    }finally{
      this.loadTurnos = false;
    }
  }

  showResenia(turno:TurnoModel){
      let resenia = turno.resenia;
      this.dialog.open(ShowReseniaDialogComponent, {
        width: '400px',
        data: { resenia }
      });
  }

  showComentario(turno:TurnoModel){
    let calificacion = turno.comentario;
    if(turno.estado == "finalizado"){
      this.dialog.open(ShowCalificacionEncuestaDialogComponent, {
        width: '400px',
        data: { calificacion }
      });
    }
  }

  get pagedTurnos() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.selectedPacienteTurnos?.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    if(this.selectedPacienteTurnos){
      return Math.ceil(this.selectedPacienteTurnos.length / this.pageSize);
    } else {
      return 0;
    }
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
