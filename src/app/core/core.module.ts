import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { LoaderModal } from './spinner/loaderModal.component';
import {  IonicModule } from 'ionic-angular';
@NgModule({
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent,LoaderModal],
  providers: [SpinnerService],
    imports: [
        IonicModule,
    CommonModule // we use ngFor
  ],
  entryComponents: [
    LoaderModal
  ],
})
export class CoreModule {}
