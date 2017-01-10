import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { HomeRoot } from '../../pages/homeRoot/homeRoot';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab2Root: any = LoginPage;
  tab1Root : any = HomeRoot;
  //tab2Root: any = Child;
  //tab3Root: any = ReposPage;

  constructor() {

  }
}
