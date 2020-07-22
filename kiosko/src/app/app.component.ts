import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/*Importar Servicio de creación*/
import { DataService } from './provider/data.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  productsIcon = "./assets/icon/productsIcon.svg";
  checkIcon = "./assets/icon/checkIcon.svg";
  annulmentIcon = "./assets/icon/annulmentIcon.svg";
  settingsIcon = "./assets/icon/settings.svg";
  bellIcon = "./assets/icon/bellIcon.svg";
  closeIcon = "./assets/icon/closeIcon.svg";
  logoutIcon = "./assets/icon/logoutIcon.svg";
  addModal:any;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService: DataService
  ) {
    this.initializeApp();
    this.dataService.create();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
    this.addModal = document.getElementById('componet_modal');
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
      // your click logic
      
      if (event.target == this.addModal){
        console.log(event.target);
        this.hideAddModal();
      }
  }

  openAddModal(){
    this.addModal = document.getElementById('componet_modal');
    this.addModal.style.display = "block"
  }

  hideAddModal(){
    this.addModal = document.getElementById('componet_modal');
    this.addModal.style.display = "none";
  }

  alerta(){
    alert("Tocado");
    console.log("click");
    
  }

 


}
