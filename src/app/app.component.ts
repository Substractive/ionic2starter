import { Component } from '@angular/core';
import { Platform , ModalController, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomeRoot } from '../pages/homeRoot/homeRoot';
import { SpinnerService } from './core/spinner/spinner.service';
import { LoaderModal } from './core/spinner/loaderModal.component';
//import {TranslateService} from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader,TranslatePipe,TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'app.html',
  providers: [SpinnerService]
})
export class MyApp {
  rootPage = LoginPage;
  tab1Root: any = LoginPage;
  tab2Root: any = HomeRoot;
  pages: Array<{title: string, component: any}>; // nav components
  //loginPage : Array <{title:string ,component: any}>;

  constructor(platform: Platform , spinerObj: SpinnerService,public modalCtrl: ModalController,translate: TranslateService) {
    platform.ready().then(() => {
      console.log("login",LoginPage);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.pages = [
      { title: 'Users', component: LoginPage },
      { title: 'Repos', component: TabsPage },  
    ];
      //spinerObj.showSpinner();
       /*const modal = modalCtrl.create(LoaderModal);
       modal.present();
     */
      // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

    //let modalObj = spinerObj.showModal();
    //spinerObj.closeModal(modalObj);
    });
  }
}