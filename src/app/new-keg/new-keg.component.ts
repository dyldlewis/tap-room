import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Output() newKegSender = new EventEmitter();
  submitForm( brand: string,  name: string,  price: number,  alcContent: number) {
    var newKegToAdd: Keg = new Keg(brand, name, price, alcContent);
    this.newKegSender.emit(newKegToAdd);
  }


  constructor() { }

  ngOnInit() {
  }

}
