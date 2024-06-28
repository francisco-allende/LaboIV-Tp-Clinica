import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { PaginationComponent } from '../../paginacion/paginacion.component';
import { ShowHistoriaClinicaComponent } from '../../dialogs/show-historia-clinica/show-historia-clinica.component';
import { MatDialog } from '@angular/material/dialog';
import * as FileSaver from 'file-saver';
import { MatIcon } from '@angular/material/icon';
import { TurnoModel } from '../../../models/turno';
import { TurnoService } from '../../../services/turno.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [SpinnerComponent, PaginationComponent, MatIcon],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  users:UserModel[] = [];
  loading: boolean = true;
  currentPage: number = 1;
  pageSize: number = 6;
  selectedUser: any;
  selectedImages: { [key: string ]: string } = {};

  constructor(public usersService: UserService, private turnosService: TurnoService, private toast:ToastrService, private dialog:MatDialog) {}

  ngOnInit(): void{
    this.getData();
  }
  
  async getData(){
    try{
      this.users =  await this.usersService.getAllUsers();
      this.setPacientesImg();
    }catch(error){
      console.log(error)
    }finally{
      this.loading = false;
    }
  }

  setPacientesImg(){
    this.users.forEach(u=>{
      if(u.rol == "paciente"){
        this.selectedImages[u.email] = u.mainImg;
      }
    })
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

  exportAllToCSV() {
    const formatCSVData = this.getCSVFormatData();

    const formattedData = formatCSVData(this.users);
    const csvRows = [
      'nombre,apellido,edad,dni,email,rol,obraSocial,especialidad,estado',
      ...formattedData.map((
        item: { nombre: any; apellido: any; edad: any; dni: any; email: any; rol: any; obraSocial: any; especialidad: any; estado: any; }
        ) => `${item.nombre},${item.apellido},${item.edad},${item.dni},${item.email},${item.rol},${item.obraSocial},${item.especialidad},${item.estado}`)
    ];

    FileSaver.saveAs(this.getBlob(csvRows), `${this.getFileName()}.csv`);
  }

  async exportUserToCSV(user:UserModel){

    const formattedData = await this.getCSVUserData(user);
    if(!formattedData || formattedData.length < 1){
      this.toast.info("Este usuario no posee turnos")
      return;
    }
    const csvRows = [
      'Id,NombreUsuarioSeleccionado,MedicoAtendedor,PacienteAtendido,FechaTurno,DiaTurno,HoraTurno,EspecialidadTurno,ComentarioTurno,ReseniaTurno,EstadoTurno,Altura,Peso,Temperatura,Presion,DatosDinamicos,',
      ...formattedData.map((item: any) => 
        `${item.Id},${item.NombreUsuarioSeleccionado},${item.MedicoAtendedor},${item.PacienteAtendido},${item.FechaTurno},${item.DiaTurno},${item.HoraTurno},${item.EspecialidadTurno},${item.ComentarioTurno},${item.ReseniaTurno},${item.EstadoTurno},${item.AlturaPaciente},${item.PesoPaciente},${item.TemperaturaPaciente},${item.PresionPaciente},${item.DatosDinamicosPaciente},${item.ObraSocial || '-'},${item.EspecialidadUsuario || '-'}` 
      )
    ];
    
    FileSaver.saveAs(this.getBlob(csvRows), `${this.getFileName(user)}.csv`);
  }

  //Mapeo los datos de los turnos, quien los tomo y con quien
  async getCSVUserData(user: UserModel): Promise<any> {
    let turnos: TurnoModel[] | undefined = [];
  
    if (user.rol == "paciente") {
      turnos = await this.turnosService.getTurnosFromPaciente(user.email);
    } else if (user.rol == "especialista") {
      turnos = await this.turnosService.getTurnosFromEspecialista(user.email);
    }
  
    if (turnos && turnos.length > 0) {
      const csvData = await Promise.all(turnos.map(async (turno) => {
        const nombreEspecialista = await this.usersService.getNameAndSurnameByEmail(turno.especialistaId);
        const nombrePaciente = await this.usersService.getNameAndSurnameByEmail(turno.pacienteId);
  
        console.log("medico: ", nombreEspecialista, " paceinte: ", nombrePaciente)

        const datosCsv: any = {
          Id: turno.id,
          NombreUsuarioSeleccionado: `${user.nombre} ${user.apellido}`,
          MedicoAtendedor: nombreEspecialista,
          PacienteAtendido: nombrePaciente,
          FechaTurno: turno.fecha.fecha,
          DiaTurno: turno.fecha.dayName,
          HoraTurno: turno.fecha.timeSlot.time,
          EspecialidadTurno: turno.especialidad,
          ComentarioTurno: turno.comentario,
          ReseniaTurno: turno.resenia,
          EstadoTurno: turno.estado,
          AlturaPaciente: turno.historiaClinica?.altura || '-',
          PesoPaciente: turno.historiaClinica?.peso || '-',
          TemperaturaPaciente: turno.historiaClinica?.temperatura || '-',
          PresionPaciente: turno.historiaClinica?.presion || '-',
          DatosDinamicosPaciente: turno.historiaClinica?.datosDinamicos ? 
            turno.historiaClinica.datosDinamicos.map(dd => `${dd.key}: ${dd.value}`).join(', ') : '-'
        };
  
        return datosCsv;
      }));
      return csvData;
    }else{
      return [];
    }
  }
  

  // Funcion auxiliadora para el mapeo
  getCSVFormatData(){
    return (data: any) => {
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
  }

  getFileName(user?: UserModel): string {
    const now = new Date();
    let inicio = '';

    if(user){
      inicio =  `Turnos_${user.nombre}_${user.apellido}`
    }else{
      inicio =  `Listado_usuarios`
    }
    return `${inicio}_Clinica_San_Lucas_${now.getFullYear()}-${this.padZero(now.getMonth() + 1)}-${this.padZero(now.getDate())}_${this.padZero(now.getHours())}-${this.padZero(now.getMinutes())}-${this.padZero(now.getSeconds())}`;
  }

  getBlob(csvRows:any):any{
    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    return blob;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
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

  selectUser(user: any) {
    this.selectedUser = user;
  }

  isUserSelected(user: any): boolean {
    return this.selectedUser === user;
  }  
}
