import { Component, Inject, Input } from '@angular/core';
import { HistoriaClinicaModel } from '../../../models/historia-clinica';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { HorariosAmPmFormatPipe } from '../../../pipes/horarios-am-pm-format.pipe';
import { SetFechaWithSlashesPipe } from '../../../pipes/set-fecha-with-slashes.pipe';
import { CapitalizeFirstLetterPipePipe } from '../../../pipes/capitalize-first-letter-pipe.pipe';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-show-historia-clinica',
  standalone: true,
  imports: [MatDividerModule, CapitalizeFirstLetterPipePipe, SetFechaWithSlashesPipe, HorariosAmPmFormatPipe, MatDialogContent, MatDialogActions ],
  templateUrl: './show-historia-clinica.component.html',
  styleUrl: './show-historia-clinica.component.css'
})
export class ShowHistoriaClinicaComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ShowHistoriaClinicaComponent>,
    @Inject(MAT_DIALOG_DATA) public historiaClinica: HistoriaClinicaModel[]) { }

    onClose(): void {
      this.dialogRef.close();
    }

}
