import { Component } from '@angular/core';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { TurnoService } from '../../../services/turno.service';
import { UserModel } from '../../../models/user';
import { TurnoModel } from '../../../models/turno';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CancelTurnoDialogComponent } from '../cancel-turno-dialog/cancel-turno-dialog.component';
import { ShowMotivoDialogComponent } from '../show-motivo-dialog/show-motivo-dialog.component';

@Component({
  selector: 'app-listar-turnos',
  standalone: true,
  imports: [SpinnerComponent, CancelTurnoDialogComponent],
  templateUrl: './listar-turnos.component.html',
  styleUrl: './listar-turnos.component.css'
})
export class ListarTurnosComponent {

  loading:boolean = true;
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

  applyFilters() {
    this.filteredTurnos = this.turnos?.filter(turno => {
      const matchEspecialidad = this.especialidadFilter ? turno.especialidad.includes(this.especialidadFilter) : true;
      const matchEspecialista = this.especialistaFilter ? this.userMap[turno.especialistaId].includes(this.especialistaFilter) : true;
      return matchEspecialidad && matchEspecialista;
    });
  }

  clearFilters() {
    this.especialidadFilter = '';
    this.especialistaFilter = '';
    this.filteredTurnos = this.turnos;
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
    if(this.turnos){
      return Math.ceil(this.turnos.length / this.pageSize);
    }else{
      return 0;
    }
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
