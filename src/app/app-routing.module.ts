import { RouteLoaderInterceptor } from './components/interceptors/routeLoaderInterceptor';
import { ServiecesComponent } from './components/content/servieces/servieces.component';
import { AboutComponent } from './components/content/about/about.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { HomeComponent } from './components/content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [RouteLoaderInterceptor] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteLoaderInterceptor],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [RouteLoaderInterceptor],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [RouteLoaderInterceptor],
  },
  {
    path: 'servieces',
    component: ServiecesComponent,
    canActivate: [RouteLoaderInterceptor],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
