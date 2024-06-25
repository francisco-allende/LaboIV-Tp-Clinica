import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { PaginationComponent } from '../../paginacion/paginacion.component';
import { ShowHistoriaClinicaComponent } from '../../dialogs/show-historia-clinica/show-historia-clinica.component';
import { MatDialog } from '@angular/material/dialog';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [SpinnerComponent, PaginationComponent],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  users:UserModel[] = [];
  loading: boolean = true;
  currentPage: number = 1;
  pageSize: number = 9;

  constructor(public usersService: UserService, private dialog:MatDialog) {}

  ngOnInit(): void{
    this.getData();
  }
  
  async getData(){
    try{
      this.users =  await this.usersService.getAllUsers();
    }catch(error){
      console.log(error)
    }finally{
      this.loading = false;
    }
  }

  async changeState(user:UserModel, state:string){
    user.estado = state;
    await this.usersService.update(user);
  }

  get pagedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.users?.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    if(this.users){
      return Math.ceil(this.users.length / this.pageSize);
    } else {
      return 0;
    }
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  verHistoriaClinica(paciente:UserModel) {
    this.dialog.open(ShowHistoriaClinicaComponent, {
      width: '600px',
      data: paciente.historiaClinica
    });
  }

  exportToCSV() {
    // Funcion auxiliadora para el mapeo
    const formatCSVData = (data: any) => {
      return data.map((item: any) => {
        return {
          nombre: item.nombre || '-',
          apellido: item.apellido || '-',
          edad: item.edad || '-',
          dni: item.dni || '-',
          email: item.email || '-',
          rol: item.rol || '-',
          obraSocial: item.obraSocial || '-',
          especialidad: item.especialidad ? item.especialidad.join(', ') : '-',
          estado: item.estado || '-'
        };
      });
    };

    // Mapeo de datos para el csv
    const formattedData = formatCSVData(this.users);
    const csvRows = [
      'nombre,apellido,edad,dni,email,rol,obraSocial,especialidad,estado',
      ...formattedData.map((
        item: { nombre: any; apellido: any; edad: any; dni: any; email: any; rol: any; obraSocial: any; especialidad: any; estado: any; }
        ) => `${item.nombre},${item.apellido},${item.edad},${item.dni},${item.email},${item.rol},${item.obraSocial},${item.especialidad},${item.estado}`)
    ];

    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    // Nombre único para el archivo
    const now = new Date();
    const dateString = `Usuarios_Clinica_San_Lucas_${now.getFullYear()}-${this.padZero(now.getMonth() + 1)}-${this.padZero(now.getDate())}_${this.padZero(now.getHours())}-${this.padZero(now.getMinutes())}-${this.padZero(now.getSeconds())}`;

    FileSaver.saveAs(blob, `${dateString}.csv`);
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
