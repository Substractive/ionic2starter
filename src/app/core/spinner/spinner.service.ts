import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoadingController,ModalController } from 'ionic-angular';
import { LoaderModal } from './loaderModal.component';

@Injectable()
export class SpinnerService {
  constructor( public loadingCtrl: LoadingController,public modalCtrl: ModalController) { }

  presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner: 'circles',
    content: `
     Loading please wait..`,
    duration: 5000,
    showBackdrop : false,
    cssClass : 'loaderClass'
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  loading.present();
}
  showSpinner()
  {
      console.log("show");
      this.presentLoadingCustom();
      var spinner = true;
  }
  showModal()
  {
      const modal = this.modalCtrl.create(LoaderModal);
      modal.present();
      return modal;
  }
  closeModal(modalObj)
  {
    console.log("modal close");
    modalObj.dismiss();
  }
}
