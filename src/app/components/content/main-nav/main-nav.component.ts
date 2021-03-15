import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'web-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  sideNavOpened = false;

  public toggleSideNav(value: boolean): void {
    this.sideNavOpened = !value;
  }

  public getFacebookPage(): void {
    window.open('https://www.facebook.com/', '_blank');
  }
  public getLinkedInPage(): void {
    window.open('https://pl.linkedin.com/', '_blank');
  }
  public getTwitterkPage(): void {
    window.open('https://twitter.com/?lang=pl', '_blank');
  }
  public getInstagramPage(): void {
    window.open('https://www.instagram.com/?hl=pl', '_blank');
  }
}
