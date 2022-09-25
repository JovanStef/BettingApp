import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return moment(value,'YYYY-MM-DD hh:mm:ss').format('MM-DD HH:mm')
  }

}
