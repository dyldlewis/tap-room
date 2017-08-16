import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'potency',
  pure: false
})
export class PotencyPipe implements PipeTransform {

  transform(input: Keg[], desiredAlcoholContent)  {
    var output: Keg[] = [];
    if(desiredAlcoholContent === "strongBeer"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcContent >= 6) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAlcoholContent === "mediumBeer"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcContent < 6 && input[i].alcContent > 4) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAlcoholContent === "lightBeer"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcContent < 4) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
