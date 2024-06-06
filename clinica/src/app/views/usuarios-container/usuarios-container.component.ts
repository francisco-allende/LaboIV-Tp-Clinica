import { Component } from '@angular/core';
import { ListadoUsuariosComponent } from '../../components/usuarios/listado-usuarios/listado-usuarios.component';
import { AltaAdminComponent } from '../../components/usuarios/alta-admin/alta-admin.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-usuarios-container',
  standalone: true,
  imports: [ListadoUsuariosComponent, AltaAdminComponent, NavbarComponent, FooterComponent],
  templateUrl: './usuarios-container.component.html',
  styleUrl: './usuarios-container.component.css'
})
export class UsuariosContainerComponent {

}
