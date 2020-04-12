import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullEmail'
})
export class NullEmailPipe implements PipeTransform {

  transform(value: any): any {
    let email=value
    if(email==null){
      email='Not available';
    }else{
      email=value
    }
    return email;
  }

}
