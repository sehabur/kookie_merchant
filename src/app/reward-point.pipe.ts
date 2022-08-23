import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rewardPoint'
})
export class RewardPointPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
