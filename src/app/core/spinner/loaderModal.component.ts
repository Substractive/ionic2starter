import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import { CommonModule } from '@angular/common';
@Component({
  templateUrl: './loader.html',
   selector: 'loader',
   styles: [`
   .loaderClass
{
    margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  height: 150px;
  width:40%;
  text-align: center;
 
}
.loaderWrapper{
 background:black;
}
  `],
   // styleUrls: ['/loader.component.css']
})
export class LoaderModal {


  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}