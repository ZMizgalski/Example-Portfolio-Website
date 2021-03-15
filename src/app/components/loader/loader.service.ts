import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new Subject<boolean>();
  public show(): void {
    this.isLoading.next(true);
  }
  public hide(): void {
    this.isLoading.next(false);
  }
  public load(): void {
    this.hide();
  }
}
