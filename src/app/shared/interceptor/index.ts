import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { TokenInterceptor } from './token.interceptor';
export const httpInterceptor = [
  {
    //this service it is an imp of http intercept angular will take care for you.
    provide: HTTP_INTERCEPTORS,
    //injecting these interceptore as a service

    useClass: HeaderInterceptor,
    multi: true,
  },
  {
    //this service it is an imp of http intercept angular will take care for you.
    provide: HTTP_INTERCEPTORS,
    //injecting these interceptore as a service

    useClass: ErrorInterceptor,
    multi: true,
  },
  {
    //this service it is an imp of http intercept angular will take care for you.
    provide: HTTP_INTERCEPTORS,
    //injecting these interceptore as a service

    useClass: TokenInterceptor,
    multi: true,
  },
];
