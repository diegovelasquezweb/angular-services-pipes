import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: number) {
    if (typeof value === 'number') {
      return 200;
    }

    return value;
  }
}

