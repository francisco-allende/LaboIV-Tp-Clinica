import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';

@Pipe({
  name: 'translateDayName',
  standalone: true
})
export class TranslateDayNamePipe implements PipeTransform {

  transform(dayName: string): string {
    const translatedNames: any = {
      Monday: 'Lunes',
      Tuesday: 'Martes',
      Wednesday: 'Miércoles',
      Thursday: 'Jueves',
      Friday: 'Viernes',
      Saturday: 'Sábado',
      Sunday: 'Domingo'
    };

    return translatedNames[dayName] || dayName; 
  }

}
