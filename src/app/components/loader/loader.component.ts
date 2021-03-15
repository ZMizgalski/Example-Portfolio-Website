import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';
import { Component } from '@angular/core';
@Component({
  selector: 'web-loader',
  template: ` <div id="loader" *ngIf="isLoading | async">
    <div class="loader-container">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(public loaderService: LoaderService) {}
}
