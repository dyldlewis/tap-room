import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  filterByPotency: string = "allBeers";
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pintButtonHasBeenClicked(kegToSellFrom: Keg){
    this.pintClickSender.emit(kegToSellFrom);
  }

  onChange(optionFromMenu) {
    this.filterByPotency = optionFromMenu;
  }

  priceColor(currentKeg){
    if(currentKeg.price <= 4){
      return "blue";
    } else if (currentKeg.price >=4 && currentKeg.price <=6){
        return "red";
    } else {
      return "green";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
