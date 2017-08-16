import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pintButtonHasBeenClicked(kegToSellFrom: Keg){
    this.pintClickSender.emit(kegToSellFrom);
  }

  priceColor(currentKeg){
    if(currentKeg.price <= 4){
      return "bg-success";
    } else if (currentKeg.price >=4 && currentKeg.price <=6){
        return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
