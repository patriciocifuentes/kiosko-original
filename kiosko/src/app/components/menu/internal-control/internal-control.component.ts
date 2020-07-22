import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-internal-control',
  templateUrl: './internal-control.component.html',
  styleUrls: ['./internal-control.component.scss'],
})
export class InternalControlComponent implements OnInit {

  backIcon = "./assets/icon/backIcon.svg";
  userIcon = "./assets/icon/userIcon.svg";
  reportIcon = "./assets/icon/reportIcon.svg";
  clientIcon = "./assets/icon/clientIcon.svg";
  cashierIcon = "./assets/icon/cashierIcon.svg";
  discountIcon = "./assets/icon/discountIcon.svg";
  helpIcon = "./assets/icon/helpIcon.svg";


  constructor(private location: Location) { }

  ngOnInit() {}
  goBack(){
    this.location.back();
  }
}
