import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core' ;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  addModal:any;
  outModal:any;
  span:any;
  constructor() { }

  ngOnInit() {
    this.addModal = document.getElementById('add_modal');
    this.outModal = document.getElementById('out_modal');
    // //para entrar al forgotPin
    // document.getElementById('forgot_pin').style.display="none";
    // document.getElementById('btn_help').addEventListener("click",function(){
    //   document.getElementById('forgot_pin').style.display="block";
    //   document.getElementById('add_modal').style.display = "none";
    // })
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
