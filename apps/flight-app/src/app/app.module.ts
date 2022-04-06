import { FlightCancellingModule } from './flight-booking/flight-cancelling/flight-cancelling.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FlightLibModule } from '@flight-workspace/flight-lib';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { SharedclickWithWarningDirective } from './sharedclick-with-warning.directive';
import { CustomPreloadingStragegy } from './shared/preloading/custom-preloading.strategy';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // FlightBookingModule, // would prevent lazy loading!

    BrowserAnimationsModule,
    FlightCancellingModule,

    FlightLibModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: CustomPreloadingStragegy,
    }),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
