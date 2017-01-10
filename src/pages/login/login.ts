import { Component,ViewChild } from '@angular/core';
import { NavController,Nav,Platform } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { HomeRoot } from '../../pages/homeRoot/homeRoot';
@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
 //styleUrls: ['src/pages/home/home.css'],
})
export class LoginPage {
   pages: Array<{title: string, component: any}>; // nav components
  @ViewChild(Nav) nav: Nav;
  openPage(page) {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    console.log(page.component);
    this.navCtrl.setRoot(page.component);
   // this.nav.setRoot(page.component);
  }
 spinner = false;
  constructor(public platform: Platform,public navCtrl: NavController) {
    this.initializeApp();
    this.spinner = false;
    this.pages = [
      { title: 'Users', component: HomeRoot },  
    ];
    console.log(HomeRoot);
    
  }
  initializeApp() 
 {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
    });
}

}
