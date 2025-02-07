import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
//c importa el interceptor
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),


  provideHttpClient(withInterceptors([authInterceptor])),


  provideToastr({
    timeOut: 2000, //tiempo de duración en pantalla
    positionClass: 'toast-bottom-left', //definir donde queremos que se muestre
    preventDuplicates: true, //evitar duplicados
    easeTime: 0, //cuánto tiempo pasa antes de que aparezca en pantalla
    progressBar: true //si queremos o no la barra de progreso
  }),


  
  //hay errores de compatilidad we, tener presente eso o nos jodemos we ;-;

  provideAnimations(),

  ]
}; 
