import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-cashier-close',
  templateUrl: './cashier-close.component.html',
  styleUrls: ['./cashier-close.component.scss'],
})
export class CashierCloseComponent implements OnInit {

  addModal:any;

  constructor(private location: Location) { }

  ngOnInit() {
    this.addModal = document.getElementById('add_modal');
  }

  goBack(){
    this.location.back();
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
      // your click logic
      
      if (event.target == this.addModal){
        this.hideAddModal();
      }
  }

  openAddModal(){
    this.addModal = document.getElementById('add_modal');
    this.addModal.style.display = "block"
  }

  hideAddModal(){
    this.addModal = document.getElementById('add_modal');
    this.addModal.style.display = "none";
  }

}
