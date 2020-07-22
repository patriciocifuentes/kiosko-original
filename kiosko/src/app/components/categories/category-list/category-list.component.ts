import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  
  checkbox_list:any; 
  top_menu:any;
  checkBox_item:any;
  true_counter=0;
  hideModify:any;


  constructor() { }

  ngOnInit() {
    this.show_TopMenu();
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
