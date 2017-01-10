import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Http } from '@angular/http';
//import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader,TranslatePipe,TranslateService } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs'; 
import { LoginPage } from '../pages/login/login';
import { HomeRoot } from '../pages/homeRoot/homeRoot';
import { CoreModule }    from './core/core.module';
//import { LoaderModal } from './core/spinner/loaderModal.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    HomeRoot
  ],
  imports: [
    IonicModule.forRoot(MyApp),
      TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
    CoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    HomeRoot
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
