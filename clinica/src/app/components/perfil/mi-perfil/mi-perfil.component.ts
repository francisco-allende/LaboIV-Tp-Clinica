import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../services/login.service';
import { TurnoService } from '../../../services/turno.service';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { ModalHorariosComponent } from '../modal-horarios/modal-horarios.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import moment from 'moment';

interface Day {
  name: string;
  value: string;
  desde: string;
  hasta: string;
  date: string;
}

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [SpinnerComponent, CommonModule, FormsModule,],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

  loading:boolean = true;
  currentRol:string | undefined = '';
  mySelf:UserModel | null = null;
  daysData = [
    { name: 'Lunes', value: 'monday', desde: '', hasta: '' },
    { name: 'Martes', value: 'tuesday', desde: '', hasta: '' },
    { name: 'Miércoles', value: 'wednesday', desde: '', hasta: '' },
    { name: 'Jueves', value: 'thursday', desde: '', hasta: '' },
    { name: 'Viernes', value: 'friday', desde: '', hasta: '' },
  ];
  

  constructor(private userService: UserService, 
    private loginService:LoginService, 
    private turnoService: TurnoService,
    private toast: ToastrService,
    public dialog: MatDialog) {}

    ngOnInit(){
      this.getData();
    }
      
    async getData(){
      try{
        let email = this.loginService.getLoggedUser();
        this.mySelf = await this.userService.getUserByEmail(email);
        this.currentRol = this.mySelf?.rol;
        if (this.currentRol == "especialista") {
          this.daysData = this.daysData; //this.mySelf?.horarios || refactorizar
        }
      }catch(error){
        console.log(error);
      }finally{
        this.loading = false;
      }
    }

    openModal() {
      const dialogRef = this.dialog.open(ModalHorariosComponent, {
        width: '600px',
        data: { daysData: this.daysData }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.daysData = result;
         
        }
      });
    }   
}
