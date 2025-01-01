import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyBy'
})
export class MultiplyByPipe implements PipeTransform {

  transform(value: number, multiplier: number): unknown {
    return value * multiplier;
  }


}
