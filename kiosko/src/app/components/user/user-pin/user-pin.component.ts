import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-user-pin',
  templateUrl: './user-pin.component.html',
  styleUrls: ['./user-pin.component.scss'],
})
export class UserPinComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

}
