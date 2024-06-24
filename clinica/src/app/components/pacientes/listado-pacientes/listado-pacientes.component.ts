import { Component } from '@angular/core';
import { ListarHistoriaClinicaComponent } from '../../historiaClinica/listar-historia-clinica/listar-historia-clinica.component';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { UserModel } from '../../../models/user';
import { TurnoService } from '../../../services/turno.service';
import { TurnoModel } from '../../../models/turno';

@Component({
  selector: 'app-listado-pacientes',
  standalone: true,
  imports: [ListarHistoriaClinicaComponent, SpinnerComponent],
  templateUrl: './listado-pacientes.component.html',
  styleUrl: './listado-pacientes.component.css'
})
export class ListadoPacientesComponent {

  mySelf:UserModel | null = null;
  loading:boolean = true;
  turnos: TurnoModel[] | undefined = [];
  pacientes: UserModel[] | undefined = [];
  historiasClinicas: HistoriaClinicaModel[] = [];

  constructor(private userService: UserService, 
    private loginService:LoginService, 
    private toast: ToastrService,
    private turnoService: TurnoService){}

    ngOnInit(){
      this.getData();
    }

    async getData(){
      try{
        let email = this.loginService.getLoggedUser();
        this.mySelf = await this.userService.getUserByEmail(email);
        this.turnos = await this.turnoService.getTurnosFromEspecialista(email);

        let auxPaciente:UserModel | undefined = undefined;
        for (const turno of this.turnos || []) {
          auxPaciente = await this.userService.getUserByEmail(turno.pacienteId);
          if (auxPaciente) {
            this.pacientes?.push(auxPaciente);
          }
        }

        let counter = 0;
        if(this.pacientes && this.pacientes.length > 0){
          this.pacientes.forEach(x=>{
            if(x.historiaClinica){
              this.historiasClinicas.push(x.historiaClinica[counter]);
              counter++;
            }
          })
        }

      }catch(error){
        console.log(error);
      }finally{
        this.loading = false;
      }
    }

}
