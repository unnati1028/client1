import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      //when there is an error then we need to extract some details from the server object

      catchError((err) => {
        console.log(JSON.stringify(err));
        return throwError({
          status: err.status,
          statusText: err.statusText,
          error: err.error,
        });
      })
    );
  }
}
