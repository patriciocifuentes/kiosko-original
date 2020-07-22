import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core' 

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  addModal:any;
  outModal:any;
  span:any;

  
  constructor() { }

  ngOnInit() {
    this.addModal = document.getElementById('add_modal');
    this.outModal = document.getElementById('out_modal');
  }

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
        // your click logic
        
        if (event.target == this.addModal){
          this.hideAddModal();
        }

        if (event.target == this.outModal){
          this.hideOutModal();
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
    openOutModal(){
      this.outModal = document.getElementById('out_modal');
      this.outModal.style.display = "block"
      
    }
    hideOutModal(){
      this.outModal = document.getElementById('out_modal');
      this.outModal.style.display = "none";
    }
    
}

