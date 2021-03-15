import { RouteLoaderInterceptor } from './components/interceptors/routeLoaderInterceptor';
import { LoaderInterceptor } from './components/interceptors/httpLoaderInterceptor';
import { MainNavComponent } from './components/content/main-nav/main-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './components/content/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/content/contact/contact.component';
import { AboutComponent } from './components/content/about/about.component';
import { ServiecesComponent } from './components/content/servieces/servieces.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './components/loader/loader.service';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServiecesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
  ],
  providers: [
    LoaderService,
    RouteLoaderInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
