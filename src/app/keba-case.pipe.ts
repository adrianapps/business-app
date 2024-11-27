import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebaCase',
  standalone: true
})
export class KebaCasePipe implements PipeTransform {

  transform(value: string): string {    return value.toLowerCase().replace(/ /g, '-');  }

}
