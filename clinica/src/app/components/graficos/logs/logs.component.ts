import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { MatIcon } from '@angular/material/icon';
import * as FileSaver from 'file-saver';
import { CursorPointerDirective } from '../../../directives/cursor-pointer.directive';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [MatIcon, CursorPointerDirective],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  
  logs:any[] = [];

  constructor(private loginServicve:LoginService){}

  ngOnInit(){
    this.getData();
  }

  async getData(){
    this.logs = await this.loginServicve.getAllLogs();
  }

  descargarCSV(){
    const formatCSVData = this.getCSVFormatData();

    const formattedData = formatCSVData(this.logs);
    const csvRows = [
      'fecha,userEmail',
      ...formattedData.map((
        item: { fecha: any; userEmail: any;}
        ) => `${item.fecha},${item.userEmail}`)
    ];

    FileSaver.saveAs(this.getBlob(csvRows), `${this.getFileName()}.csv`);
  }

  getCSVFormatData(){
    return (data: any) => {
      return data.map((item: any) => {
        return {
          fecha: this.getFormattedDate(item.fecha) || '-',
          userEmail: item.userEmail || '-',
        };
      });
    };
  }

  getFormattedDate(fecha:any) {
    const date = new Date(fecha.toDate());
  
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); 

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;  

    return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  getFileName(): string {
    const now = new Date();
    return `Logs_Clinica_San_Francisco_${now.getFullYear()}-${this.padZero(now.getMonth() + 1)}-${this.padZero(now.getDate())}_${this.padZero(now.getHours())}-${this.padZero(now.getMinutes())}-${this.padZero(now.getSeconds())}`;
  }

  getBlob(csvRows:any):any{
    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    return blob;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
