import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Lagunitas', 'IPA', 6.75, 6.2),
    new Keg('Red Seal', 'Lager', 5.00, 4.1),
    new Keg('Equinox', 'Stout', 5.75, 5.5),
    new Keg('Coors', 'Banquet', 3.50, 3.0),
  ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  sellPint(clickedKeg){
    clickedKeg.pints -= 1;
    if(clickedKeg.pints <= 10){
      clickedKeg.color = "bg-danger";
    }
  }
}
