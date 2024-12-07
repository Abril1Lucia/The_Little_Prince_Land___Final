import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
// import { provideToastr } from 'ngx-toastr';
// import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideRouter(routes),
  // provideHttpClient(),
  // provideToastr({
  //   timeOut:200,
  //   positionClass: 'toast-bottom'
  // }),

  //hay errores de compatilidad we, tener presente eso o nos jodemos we ;-;

  // provideAnimations(),

  ]
};
