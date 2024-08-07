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
import { DayModel, TimeSlot } from '../../../models/day';
import { VerModalHorariosComponent } from '../ver-modal-horarios/ver-modal-horarios.component';
import { ShowHistoriaClinicaComponent } from '../../dialogs/show-historia-clinica/show-historia-clinica.component';
import { RoundedImgDirective } from '../../../directives/rounded-img.directive';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [RoundedImgDirective, SpinnerComponent,  CommonModule, FormsModule, ],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

  loading:boolean = true;
  currentRol:string | undefined = '';
  mySelf:UserModel | null = null;
  daysData: DayModel[] = [];
  selectedImage: string | undefined = ''; 
  

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
        this.selectedImage = this.mySelf?.mainImg;
        this.currentRol = this.mySelf?.rol;
        this.generateDaysData();
        if (this.currentRol == "especialista") {
          this.daysData = this.daysData; 
        }
      }catch(error){
        console.log(error);
      }finally{
        this.loading = false;
      }
    }

    toggleImage() {
      this.selectedImage = (this.selectedImage === this.mySelf?.mainImg) ? this.mySelf?.extraImg : this.mySelf?.mainImg;
    }

    openModal() {
      let hasBeenLoadedOnce = false;
      this.mySelf?.horarios?.forEach(day=>{
        if(day.dayName != '' && day.fecha != '' && day.desde != '' && day.hasta != ''){
          hasBeenLoadedOnce = true;
        }
      })

      const dialogRef = this.dialog.open(ModalHorariosComponent, {
        width: '600px',
        data: { daysData: hasBeenLoadedOnce? this.mySelf?.horarios : this.daysData }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.daysData = result;
          this.saveHorarios();
        }
      });
    }   

    verHorarios(){
      let daysData = this.mySelf?.horarios;
      this.dialog.open(VerModalHorariosComponent, {
        width: '600px',
        data: { daysData: daysData }
      });
    }

    generateDaysData(): void {
      const today = moment();
      this.daysData = [];
  
      for (let i = 0; i < 15; i++) {
        const day = today.clone().add(i, 'days');
        this.daysData.push({
          dayName: day.format('dddd'),
          desde: '',
          hasta: '',
          fecha: day.format('DD-MM-YYYY'),
          estaDisponible: true,
          timeSlot: {time: '', estaDisponible: true }
        });
      }
    }

    saveHorarios(){
      if (this.mySelf) {

        this.mySelf.horarios = this.daysData.map(day => ({
          dayName: day.dayName,
          fecha: day.fecha,
          desde: day.desde,
          hasta: day.hasta,
          estaDisponible: true,
          timeSlot: day.timeSlot,
          timeSlots: this.getTimeSlotsByRange(day.desde, day.hasta),
        }));
   
        this.userService.update(this.mySelf);
      }
    }

    getTimeSlotsByRange(desde: string, hasta: string): TimeSlot[] {
      const timeSlots: TimeSlot[] = [];
      let startTime = moment(desde, 'HH:mm');
      const endTime = moment(hasta, 'HH:mm');
    
      while (startTime < endTime) {
        timeSlots.push({ time: startTime.format('HH:mm'), estaDisponible: true });
        startTime.add(30, 'minutes');
      }
    
      return timeSlots;
    }

    verHistoriaClinica(paciente:UserModel | null) {
      if(paciente && paciente.historiaClinica && paciente.historiaClinica.length > 0 && paciente.historiaClinica[0].altura > 0){
        this.dialog.open(ShowHistoriaClinicaComponent, {
          width: '600px',
          data: paciente
        });
      }else{
        this.toast.info("Aun no posees historia clínica")
      }

  }
    

    
}
