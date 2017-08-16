import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Suds Watering Hole';
  masterKegList: Keg[] = [
    new Keg('Lagunitas', 'IPA', 5, 6),
    new Keg('Red Seal', 'Lager', 5, 4),
    new Keg('Equinox', 'Stout', 5, 5),
    new Keg('Coors', 'Banquet', 3, 4),
  ];
}
