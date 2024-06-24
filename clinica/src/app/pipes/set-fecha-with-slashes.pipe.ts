import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setFechaWithSlashes',
  standalone: true
})
export class SetFechaWithSlashesPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/-/g, '/');
  }

}
