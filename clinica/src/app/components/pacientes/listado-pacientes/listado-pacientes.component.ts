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

@Component({
  selector: 'app-listado-pacientes',
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
  templateUrl: './listado-pacientes.component.html',
  styleUrl: './listado-pacientes.component.css'
})
export class ListadoPacientesComponent {

  mySelf:UserModel | null = null;
  loading:boolean = true;
  turnos: TurnoModel[] | undefined = [];
  pacientes: UserModel[] | undefined = [];
  selectedImages: { [key: string ]: string } = {};

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

        this.mapPacientes()
      
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

    verHistoriaClinica(paciente:UserModel) {
        this.dialog.open(ShowHistoriaClinicaComponent, {
          width: '600px',
          data: paciente.historiaClinica
        });
    }

}
