import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss'],
})
export class StartupComponent implements OnInit {


  countryOptions:any;
  countryDropdown:any;
  languageOptions:any;
  languageDropdown:any;
  isActive_CountryDropdown = false;
  isActive_LanguageDropdown = false; 
 
  constructor() {
  }

 
 

  ngOnInit() {
    this.countryOptions = document.querySelectorAll(".dropdown-country-item");
    this.countryDropdown = document.getElementById("dropdown-country");

    this.languageOptions = document.querySelectorAll(".dropdown-language-item");
    this.languageDropdown = document.getElementById("dropdown-language");

    this.selectCountry();
    this.selectLanguage(); 
  }

  
  

  showCountryOptions = ()=>{
    if(this.isActive_CountryDropdown == true){
      this.countryDropdown.classList.remove("is-active");
      this.isActive_CountryDropdown = false;
    }else{
      this.countryDropdown.classList.add("is-active");
      this.isActive_CountryDropdown = true;
    } 
  }

  showLanguageOptions = ()=>{
    if(this.isActive_LanguageDropdown == true){
      this.languageDropdown.classList.remove("is-active");
      this.isActive_LanguageDropdown = false;
    }else{
      this.languageDropdown.classList.add("is-active");
      this.isActive_LanguageDropdown = true;
    } 
  }

  selectCountry(){
    for (let index = 0; index < this.countryOptions.length; index++) {

        this.countryOptions[index].addEventListener("click", (e)=>{

          document.getElementById("country-selected").innerHTML= e.srcElement.innerHTML;
        })
      }
  }


  selectLanguage(){
    for (let index = 0; index < this.languageOptions.length; index++) {

        this.languageOptions[index].addEventListener("click", (e)=>{
          
          document.getElementById("language-selected").innerHTML= e.srcElement.innerHTML;
        })
      }
  }
  

  

}
