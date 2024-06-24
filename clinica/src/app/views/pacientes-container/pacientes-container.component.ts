import { Component } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ListadoPacientesComponent } from "../../components/pacientes/listado-pacientes/listado-pacientes.component";

@Component({
  selector: 'app-pacientes-container',
  standalone: true,
  imports: [ListadoPacientesComponent, NavbarComponent, FooterComponent],
  templateUrl: './pacientes-container.component.html',
  styleUrl: './pacientes-container.component.css'
})
export class PacientesContainerComponent {

}
