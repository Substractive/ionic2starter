import { Component,ViewChild } from '@angular/core';

import { NavController,Nav ,MenuController} from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';
@Component({
  selector: 'homeRoot',
  templateUrl: 'homeRoot.html'
}) 
export class HomeRoot {
  @ViewChild(Nav) nav: Nav;
  openPage(page) {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    console.log(page.component);
    this.nav.setRoot(page.component);
  }
  pages: Array<{title: string, component: any}>; // nav components
  constructor(public navCtrl: NavController) {
  this.pages = [
      { title: 'Users', component: LoginPage },
      { title: 'Repos', component: TabsPage },  
    ];
  }


}
