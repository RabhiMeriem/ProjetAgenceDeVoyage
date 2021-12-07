import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyagePipe'
})
export class VoyagePipePipe implements PipeTransform {

  transform(nb: number): string {
    return "-" + nb + "%";
  }

}
