import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-products-for-sale',
  templateUrl: './products-for-sale.component.html',
  styleUrls: ['./products-for-sale.component.scss'],
})
export class ProductsForSaleComponent implements OnInit {

  constructor(private location: Location) {  }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }
}
