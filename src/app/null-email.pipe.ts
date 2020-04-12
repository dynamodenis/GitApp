import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullEmail'
})
export class NullEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
