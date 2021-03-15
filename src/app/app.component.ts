import { LoaderService } from './components/loader/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-root',
  template: `<web-main-nav></web-main-nav>`,
  styles: ['* {transtion: 0.2s ease}'],
})
export class AppComponent implements OnInit {
  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.show();
  }
}
