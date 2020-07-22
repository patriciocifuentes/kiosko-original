import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-product-category-service',
  templateUrl: './product-category-service.component.html',
  styleUrls: ['./product-category-service.component.scss'],
})
export class ProductCategoryServiceComponent implements OnInit {

  colorOptions:any;
  colorDropdown:any;
  isActive_CountryDropdown = false;
  isProductModalShow=false;
  isCategoryModalShow=false;
  isServiceModalShow=false;
  currentColor;

  categoryOptions:any;
  categoryDropdown:any;
  isActive_CategoriesDropdown = false;

  taxOptions:any;
  taxDropdown:any;
  isActive_TaxDropdown = false;

  constructor(private location: Location) { }

  ngOnInit() {

    this.colorOptions = document.querySelectorAll(".dropdown-color-item");
    this.colorDropdown = document.getElementById("dropdown-color");
    this.selectColor();
    document.getElementById("modal-category").style.display="block";
    document.getElementById("modal-product").style.display="none";
    document.getElementById("modal-service").style.display="none";

    this.categoryDropdown = document.getElementById("dropdown-categories");
    this.categoryOptions = document.querySelectorAll(".dropdown-category-item");
    this.selectCategory();

    this.taxDropdown = document.getElementById("dropdown-Tax");
    this.taxOptions = document.querySelectorAll(".dropdown-tax-item");
    this.selectTax();

    
    

  }

  goBack(){
    this.location.back();
  }

  showColorOptions = ()=>{
    
    if(this.isActive_CountryDropdown == true){
      this.colorDropdown.classList.remove("is-active");
      this.isActive_CountryDropdown = false;
    }else{
      this.colorDropdown.classList.add("is-active");
      this.isActive_CountryDropdown = true;
    } 
  }

  showCategoryOptions = ()=>{
    
    if(this.isActive_CategoriesDropdown == true){
      this.categoryDropdown.classList.remove("is-active");
      this.isActive_CategoriesDropdown = false;
    }else{
      this.categoryDropdown.classList.add("is-active");
      this.isActive_CategoriesDropdown = true;
    } 
  }

  showTaxOptions = ()=>{
    
    if(this.isActive_TaxDropdown == true){
      this.taxDropdown.classList.remove("is-active");
      this.isActive_TaxDropdown = false;
    }else{
      this.taxDropdown.classList.add("is-active");
      this.isActive_TaxDropdown = true;
    } 
  }




  selectColor(){
    for (let index = 0; index < this.colorOptions.length; index++) {

        this.colorOptions[index].addEventListener("click", (e)=>{          
          this.currentColor = document.getElementById("color-select-square").classList[2];
          document.getElementById("color-select-square").classList.remove(this.currentColor);   
          document.getElementById("color-select-square").style.display="block";
          document.getElementById("color-select-square").classList.add(e.target.classList[1]);
        })
      }
  }


  selectCategory(){
    for (let index = 0; index < this.categoryOptions.length; index++) {

      this.categoryOptions[index].addEventListener("click", (e)=>{                
        // this.currentColor = document.getElementById("color-select-square").classList[2];
        // document.getElementById("color-select-square").classList.remove(this.currentColor);   
        // document.getElementById("color-select-square").style.display="block";
        // document.getElementById("color-select-square").classList.add(e.target.classList[1]);
      })
    }
  }

  selectTax(){
    for (let index = 0; index < this.taxOptions.length; index++) {

      this.taxOptions[index].addEventListener("click", (e)=>{
        // console.log(e.target.innerText);
                
        // this.currentColor = document.getElementById("color-select-square").classList[2];
        // document.getElementById("color-select-square").classList.remove(this.currentColor);   
        // document.getElementById("color-select-square").style.display="block";
        // document.getElementById("color-select-square").classList.add(e.target.classList[1]);
      })
    }
  }

  showCategoryModal(){
    if(this.isCategoryModalShow==false)
    {
      document.getElementById("modal-category").style.display="block";
      this.isCategoryModalShow=true;
      document.getElementById("modal-product").style.display="none";
      document.getElementById("modal-service").style.display="none";
      this.isProductModalShow=false;
      this.isServiceModalShow=false;

    }
    else
    {
      document.getElementById("modal-category").style.display="none";
      this.isCategoryModalShow=false;
    }
  }

  showProductModal(){
    if(this.isProductModalShow==false)
    {
      document.getElementById("modal-product").style.display="block";
      this.isProductModalShow=true;
      document.getElementById("modal-category").style.display="none";
      document.getElementById("modal-service").style.display="none";
      this.isCategoryModalShow=false;
      this.isServiceModalShow=false;

    }
    else
    {
      document.getElementById("modal-product").style.display="none";
      this.isProductModalShow=false;
    }
  }

  showServiceModal(){
    if(this.isServiceModalShow==false)
    {
      document.getElementById("modal-service").style.display="block";
      this.isServiceModalShow=true;
      document.getElementById("modal-category").style.display="none";
      document.getElementById("modal-product").style.display="none";
      this.isCategoryModalShow=false;
      this.isProductModalShow=false;

    }
    else
    {
      document.getElementById("modal-service").style.display="none";
      this.isServiceModalShow=false;
    }
  }



}
