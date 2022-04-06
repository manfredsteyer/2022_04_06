import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'passenger-mf',
    loadChildren: () => loadRemoteModule({
      type: 'module',  // ab ng13
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      exposedModule: './Module'
    })
      .then(esm => esm.PassengerModule)

    //import('passenger/Module').then(esm => esm.PassengerModule)
  },
  {
    path: 'angular2',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
      remoteName: 'angular2',
      exposedModule: './web-components',
      elementName: 'angular2-element'
    } as WebComponentWrapperOptions
  },

  // And this route too:
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },

  // And also this route:
  {
    matcher: startsWith('angular3'), // angular3/a/b/c
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element'
    } as WebComponentWrapperOptions
  },

  {
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.module')
                          .then(esm => esm.FlightBookingModule),
    data: {
      preload: false
    }
  },


  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
