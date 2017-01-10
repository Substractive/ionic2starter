import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../logger.service';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'toh-spinner',
  templateUrl: 'spinner.html',
 // styleUrls: ['spinner.component.css']
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = true;
  private spinnerStateChanged: Subscription;
  constructor(private spinnerService: SpinnerService) {

  }
  ngOnInit() {
    console.log(this.visible);
  }
  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
