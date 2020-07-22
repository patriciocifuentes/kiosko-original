import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  checkbox_list:any; 
  top_menu:any;
  checkBox_item:any;
  true_counter=0;
  hideModify:any;

  constructor(private location: Location) { 
    
  }

  ngOnInit() {
    this.show_TopMenu();
  }

  goBack(){
    this.location.back();
  }

  show_TopMenu(){
    this.top_menu = document.getElementById("top_menu");
    this.top_menu.style.display="none";
    this.checkbox_list = document.getElementsByClassName("check");

    for (let index = 0; index < this.checkbox_list.length; index++) {
      this.checkBox_item = document.getElementById(this.checkbox_list[index].id)
      this.checkBox_item.addEventListener("click", ()=>{
        this.checkBox_item = <HTMLInputElement> document.getElementById(this.checkbox_list[index].id)  
        if(this.checkBox_item.checked){
          this.true_counter+=1;
          this.top_menu.style.display="flex";
          
          if(this.true_counter>1){
            document.getElementById("modify_btn").style.display="none";
            this.top_menu.style.justifyContent="flex-end";
          }
        }else{
          this.true_counter-=1;

          if(this.true_counter<=1){
            document.getElementById("modify_btn").style.display="flex"
          }

          if(this.true_counter == 0){
            this.top_menu.style.display="none"
            this.true_counter=0;
          }
        } 
        
      })
    }
  }

}
