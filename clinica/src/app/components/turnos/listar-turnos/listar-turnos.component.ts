import { Component } from '@angular/core';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CancelTurnoDialogComponent } from '../../dialogs/cancel-turno-dialog/cancel-turno-dialog.component';
import { ShowMotivoDialogComponent } from '../../dialogs/show-motivo-dialog/show-motivo-dialog.component';
import { ListadoFiltrosComponent } from '../listado-filtros/listado-filtros.component';
import { PaginationComponent } from '../../paginacion/paginacion.component';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';

@Component({
  selector: 'app-listar-turnos',
  standalone: true,
  imports: [SpinnerComponent, CancelTurnoDialogComponent, ListadoFiltrosComponent, PaginationComponent, CapitalizeFirstLetterPipePipe, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe],
  templateUrl: './listar-turnos.component.html',
  styleUrl: './listar-turnos.component.css'
})
export class ListarTurnosComponent {

  loading:boolean = true;
  currentRol:string | undefined = 'admin';
  turnos:TurnoModel[] | undefined = [];
  filteredTurnos: TurnoModel[] | undefined = [];
  userMap: { [email: string]: string } = {};
  currentPage: number = 1;
  pageSize: number = 10;
  especialidadFilter: string = '';
  especialistaFilter: string = '';


  constructor(public userService: UserService, 
              public loginService:LoginService, 
              private turnoService: TurnoService,
              private toast: ToastrService,
              public dialog: MatDialog) {}

  ngOnInit(){
    this.turnoService.getAllTurnos().subscribe(data => {
      this.turnos = data;
      this.filteredTurnos = this.turnos;
      this.getData();
    })
  }

  async getData(){
    try{
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

  setFilter(filterType: string, filterValue: string) {
    if (filterType === 'especialidad') {
      this.especialidadFilter = filterValue;
    } else if (filterType === 'especialista') {
      this.especialistaFilter = this.userMap[filterValue];
    }
  }

  onFilterApplied(filters: { especialidadFilter: string, especialistaFilter: string }) {
    this.especialidadFilter = filters.especialidadFilter;
    this.especialistaFilter = filters.especialistaFilter;
    this.applyFilters();
  }

  onFiltersCleared() {
    this.especialidadFilter = '';
    this.especialistaFilter = '';
    this.filteredTurnos = this.turnos;
  }

  applyFilters() {
    this.filteredTurnos = this.turnos?.filter(turno => {
      const matchEspecialidad = this.especialidadFilter ? turno.especialidad.includes(this.especialidadFilter) : true;
      const matchEspecialista = this.especialistaFilter ? this.userMap[turno.especialistaId].includes(this.especialistaFilter) : true;
      return matchEspecialidad && matchEspecialista;
    });
  }


  async changeState(turno: TurnoModel, state: string) {
    const dialogRef = this.dialog.open(CancelTurnoDialogComponent, {
      width: '400px',
      data: { motivo: '' }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        turno.estado = state;
        turno.comentario = result; 
        await this.turnoService.update(turno);
      }
    });
  }

  showMotivo(motivo:any){
    this.dialog.open(ShowMotivoDialogComponent, {
      width: '400px',
      data: { motivo }
    });
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
