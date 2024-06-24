import { Component, Input } from '@angular/core';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';

@Component({
  selector: 'app-listar-historia-clinica',
  standalone: true,
  imports: [CapitalizeFirstLetterPipePipe, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe],
  templateUrl: './listar-historia-clinica.component.html',
  styleUrl: './listar-historia-clinica.component.css'
})
export class ListarHistoriaClinicaComponent {

  @Input() historiasClinicas: HistoriaClinicaModel[] = [];

  constructor(private userService: UserService, private loginService: LoginService) { }

  async ngOnInit() {
    /*
    const currentUser = this.loginService.getLoggedUser();
    if (currentUser && currentUser.email) {
      const usuario = await this.userService.getUserByEmail(currentUser.email);
      if (usuario.historiaClinica) {
        this.historiasClinicas = usuario.historiaClinica;
      }
    }
    */
  }
}
