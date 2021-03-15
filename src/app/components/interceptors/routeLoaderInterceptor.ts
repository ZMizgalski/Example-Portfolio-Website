import { LoaderService } from './../loader/loader.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RouteLoaderInterceptor implements CanActivate {
  constructor(private router: Router, private loaderService: LoaderService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // this.router.events.subscribe(e => {
    //     if (e instanceof NavigationStart) {
    //         this.loaderService.show();
    //     }
    // });
    return true;
  }
}
