import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoFiltrosComponent } from '../listado-filtros/listado-filtros.component';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { UserModel } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../services/login.service';
import { TurnoService } from '../../../services/turno.service';
import { PaginationComponent } from '../../paginacion/paginacion.component';
import { TurnoModel } from '../../../models/turno';
import { MatDialog } from '@angular/material/dialog';
import { CancelTurnoDialogComponent } from '../../dialogs/cancel-turno-dialog/cancel-turno-dialog.component';
import { ShowMotivoDialogComponent } from '../../dialogs/show-motivo-dialog/show-motivo-dialog.component';
import { RechazarTurnoDialogComponent } from '../../dialogs/rechazar-turno-dialog/rechazar-turno-dialog.component';
import { FinalizarTurnoDialogComponent } from '../../dialogs/finalizar-turno-dialog/finalizar-turno-dialog.component';
import { ShowMotivoRechazoDialogComponent } from '../../dialogs/show-motivo-rechazo-dialog/show-motivo-rechazo-dialog.component';
import { ShowReseniaDialogComponent } from '../../dialogs/show-resenia-dialog/show-resenia-dialog.component';
import { CalificacionEncuestaDialogComponent } from '../../dialogs/calificacion-encuesta-dialog/calificacion-encuesta-dialog.component';
import { ShowCalificacionEncuestaDialogComponent } from '../../dialogs/show-calificacion-encuesta-dialog/show-calificacion-encuesta-dialog.component';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [MatIcon, FormsModule ,CommonModule, SpinnerComponent, ListadoFiltrosComponent, PaginationComponent, CapitalizeFirstLetterPipePipe, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})
export class MisTurnosComponent {
  
  loading:boolean = true;
  currentRol:string | undefined = '';
  mySelf:UserModel | null = null;
  pacientes:UserModel[] | null = [];
  medicos:UserModel[] | undefined = [];
  turnos:TurnoModel[] | undefined = [];
  filteredTurnos: TurnoModel[] | undefined = [];
  userMap: { [email: string]: string } = {};
  currentPage: number = 1;
  pageSize: number = 10;
  especialidadFilter: string = '';
  especialistaFilter: string = '';
  pacienteFilter: string = '';
  intervalId: any;
  generalSearch: string = '';

  constructor(private userService: UserService, 
    private loginService:LoginService, 
    private turnoService: TurnoService,
    private toast: ToastrService,
    public dialog: MatDialog) {}

    ngOnInit(){
      this.getData();
    }

    getTurno(turno:any){
      console.log(turno)
    }
      
    async getData(){
      try{
        let email = this.loginService.getLoggedUser();
        this.mySelf = await this.userService.getUserByEmail(email);
        this.currentRol = this.mySelf?.rol;

        if(this.currentRol == "paciente"){
          this.turnos = await this.turnoService.getTurnosFromPaciente(email);
        }else if(this.currentRol == "especialista"){
          this.turnos = await this.turnoService.getTurnosFromEspecialista(email);
        }
        this.filteredTurnos = this.turnos;

        if(this.turnos && this.turnos.length > 0){
          for (const turno of this.turnos) {
            if (!this.userMap[turno.especialistaId]) {
              this.userMap[turno.especialistaId] = await this.userService.getNameAndSurnameByEmail(turno.especialistaId);
            }
            if (!this.userMap[turno.pacienteId]) {
              this.userMap[turno.pacienteId] = await this.userService.getNameAndSurnameByEmail(turno.pacienteId);
            }
          }
        }
      }catch(error){
        console.log(error);
      }finally{
        this.loading = false;
      }
    }

    completarEncuesta(turno:TurnoModel){
      const dialogRef = this.dialog.open(CalificacionEncuestaDialogComponent, {
        width: '400px',
        data: { calificacion: '' }
      });
      dialogRef?.afterClosed().subscribe(async (result) => {
        if (result) {
          turno.comentario = result;
          await this.turnoService.update(turno);
        }
      });
    }

    showEncuesta(turno:TurnoModel){
      let calificacion = turno.comentario;
      if(turno.estado == "finalizado"){
        this.dialog.open(ShowCalificacionEncuestaDialogComponent, {
          width: '400px',
          data: { calificacion }
        });
      }
    }

    setFilter(filterType: string, filterValue: string) {
      if (filterType === 'especialidad') {
        this.especialidadFilter = filterValue;
      } else if (filterType === 'especialista') {
        this.especialistaFilter = this.userMap[filterValue];
      } else if(filterType == 'paciente'){
        this.pacienteFilter = this.userMap[filterValue];
      }
    }

    onFilterApplied(filters: { especialidadFilter: string, especialistaFilter: string, pacienteFilter:string }) {
      this.especialidadFilter = filters.especialidadFilter;
      this.especialistaFilter = filters.especialistaFilter;
      this.pacienteFilter = filters.pacienteFilter;
      this.applyFilters();
    }
  
    onFiltersCleared() {
      this.especialidadFilter = '';
      this.especialistaFilter = '';
      this.filteredTurnos = this.turnos;
    }

    onGeneralSearch() {
      this.generalSearch = this.generalSearch.toLowerCase();
      this.applyFilters();
    }
  
    applyFilters() {
      this.filteredTurnos = this.turnos?.filter(turno => {
        const matchEspecialidad = this.especialidadFilter ? turno.especialidad.includes(this.especialidadFilter) : true;
        const matchEspecialista = this.especialistaFilter ? this.userMap[turno.especialistaId].includes(this.especialistaFilter) : true;
        const matchPaciente = this.pacienteFilter ? this.userMap[turno.pacienteId].includes(this.pacienteFilter) : true;
        const matchGeneralSearch = this.generalSearch ? this.matchGeneralSearch(turno) : true;
        return matchEspecialidad && matchEspecialista && matchPaciente && matchGeneralSearch;
      });
    }

    matchGeneralSearch(turno: TurnoModel): boolean {
      const search = this.generalSearch;
      const fieldsToSearch = [
        turno.especialidad,
        this.userMap[turno.especialistaId],
        this.userMap[turno.pacienteId],
        turno.fecha.dayName,
        turno.fecha.fecha,
        turno.fecha.timeSlot.time,
        turno.estado,
        turno.resenia,
        turno.comentario,

        ...Object.values(this.mySelf?.historiaClinica || []).flatMap(hist => [
          hist.altura,
          hist.peso,
          hist.temperatura,
          hist.presion,
          ...hist.datosDinamicos?.flatMap(dd => [dd.key, dd.value]) || []
        ])
      ];
      return fieldsToSearch.some(field => field?.toString().toLowerCase().includes(search));
    }
  
    async changeState(turno: TurnoModel, state: string) {
      let dialogRef = null;

      if(state == "cancelado"){
        dialogRef = this.dialog.open(CancelTurnoDialogComponent, {
          width: '400px',
          data: { motivo: '' }
        });
      }
      if(state == "rechazado"){
        dialogRef = this.dialog.open(RechazarTurnoDialogComponent, {
          width: '400px',
          data: { motivo: '' }
        });
      }
      if(state == "cancelado" || state == "rechazado"){
        dialogRef?.afterClosed().subscribe(async (result) => {
          if (result) {
            turno.estado = state;
            turno.comentario = result
            turno.fecha.timeSlot.estaDisponible = true;
            await this.turnoService.update(turno);
          }
        });
      }

      if(state == "confirmado"){
        this.toast.success("Turno confirmado!");
        turno.estado = state;
        await this.turnoService.update(turno);
      }
      if(state == "finalizado"){
        dialogRef = this.dialog.open(FinalizarTurnoDialogComponent, {
          width: '400px',
          data: { turno: turno }
        });
        dialogRef?.afterClosed().subscribe(async (result) => {
          if (result) {
            turno.estado = state;
            turno.resenia = result.resenia;
            await this.cargarHistoriaClinica(turno, result.historiaClinica);
            await this.turnoService.update(turno);
          }
        });
      }
    }

    async cargarHistoriaClinica(turno:TurnoModel, hist:HistoriaClinicaModel){
      if (turno && turno.estado === 'finalizado') {
        const paciente = await this.userService.getUserByEmail(turno.pacienteId);
        paciente.historiaClinica = paciente.historiaClinica?.filter((hist: {}) => hist && Object.keys(hist).length > 0) || [];
        
        if (paciente.historiaClinica) {
          paciente.historiaClinica.push(hist);
        } else {
          paciente.historiaClinica = [hist];
        }
        await this.userService.update(paciente);
      }
    }
  
    showMotivo(turno:TurnoModel){
      let motivo:string = turno.comentario;
      if(turno.estado == "cancelado"){
        this.dialog.open(ShowMotivoDialogComponent, {
          width: '400px',
          data: { motivo }
        });
      }
      if(turno.estado == "rechazado"){
        this.dialog.open(ShowMotivoRechazoDialogComponent, {
          width: '400px',
          data: { motivo }
        });
      }
      if(turno.estado == "finalizado"){
        let resenia = turno.resenia;
        this.dialog.open(ShowReseniaDialogComponent, {
          width: '400px',
          data: { resenia }
        });
      }
 
    }
    
    get pagedTurnos() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.filteredTurnos?.slice(startIndex, startIndex + this.pageSize);
    }
  
    get totalPages() {
      if(this.filteredTurnos){
        return Math.ceil(this.filteredTurnos.length / this.pageSize);
      } else {
        return 0;
      }
    }
  
    setPage(page: number) {
      this.currentPage = page;
    }
}
