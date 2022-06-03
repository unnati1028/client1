import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //content-type:'application/json'
    //here we need to modify the request
    //we can't do any changes into existing req.
    //for the same : they rprovidede the clonse method --> we will provide info. and we wil use
    //that new request for sending the info to the server

    //if content type is already set then we should not modify the req.
    //to solve this proble, ==> can we check that the content type header is set or not

    if (request.headers.has('content-type')) {
      return next.handle(request);
    } else
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    console.log('Hello from interceptor');
    return next.handle(request);
  }
}
