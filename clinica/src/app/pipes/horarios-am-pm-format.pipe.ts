import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horariosAmPmFormat',
  standalone: true
})
export class HorariosAmPmFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const [hours, minutes] = value.split(':').map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

}
