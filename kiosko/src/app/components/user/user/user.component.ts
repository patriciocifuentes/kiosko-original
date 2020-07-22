import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    document.getElementById("btn_permit").addEventListener("click", (event)=>{
      document.getElementById("card_1").classList.toggle("flipped");

      
      
      // if(event.target.id =="card_1"||event.target.classList[0]=="name"){
      //   document.getElementById("card_1").classList.toggle("flipped");
      // }
      
    })

    document.getElementById("card_1").addEventListener("click", (event)=>{
      
      var object = <HTMLInputElement> event.target;

      if(object.classList[0]=="card__detail"||object.classList[0]=="name"
      ||object.classList[0]=="card"){
        document.getElementById("card_1").classList.toggle("flipped");
      }
    })


  }

}
