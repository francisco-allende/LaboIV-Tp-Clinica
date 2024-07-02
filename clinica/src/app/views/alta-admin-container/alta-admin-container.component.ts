import { Component } from '@angular/core';
import { AltaAdminComponent } from '../../components/usuarios/alta-admin/alta-admin.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-alta-admin-container',
  standalone: true,
  imports: [AltaAdminComponent, AltaAdminComponent, NavbarComponent, FooterComponent],
  templateUrl: './alta-admin-container.component.html',
  styleUrl: './alta-admin-container.component.css'
})
export class AltaAdminContainerComponent {

}
