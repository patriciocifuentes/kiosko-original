import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company2',
  templateUrl: './company2.component.html',
  styleUrls: ['./company2.component.scss'],
})
export class Company2Component implements OnInit {

  identificationOptions:any;
  identificationDropdown:any;
  isActive_IdentificationDropdown = false;

  constructor() { }

  ngOnInit() {
    this.identificationOptions = document.querySelectorAll(".dropdown-identification-item");
    this.identificationDropdown = document.getElementById("dropdown-identification");

    this.selectIdentification();
  }

  showIdentificationOptions = ()=>{
    if(this.isActive_IdentificationDropdown == true){
      this.identificationDropdown.classList.remove("is-active");
      this.isActive_IdentificationDropdown = false;
    }else{
      this.identificationDropdown.classList.add("is-active");
      this.isActive_IdentificationDropdown = true;
    } 
  }

  selectIdentification(){
    for (let index = 0; index < this.identificationOptions.length; index++) {

        this.identificationOptions[index].addEventListener("click", (e)=>{

          document.getElementById("identification-selected").innerHTML= e.srcElement.innerHTML;
        })
      }
  }

}
