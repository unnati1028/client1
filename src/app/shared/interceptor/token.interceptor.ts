import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import jwt_decode from 'jwt-decode';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // except login and register we have to add token for every rest api request
    // before adding the token ---> we should validate the token by extracting expiry of the tokens
    // retrieve the token
    let token = localStorage.getItem('token');

    console.log(jwt_decode(token || ''));
    let decoded: any = jwt_decode(token || '');
    console.log(decoded.exp);
    // then we should redirect to the login page

    if (request.url.includes('login') || request.url.includes('register')) {
      console.log('inside the login and register condition');
      return next.handle(request);
    }

    // if there is no token, then we should redirect to the login page
    if (token == null || token.length == 0) {
      this.router.navigate(['/user/login']);
      return next.handle(request);
    }

    return next.handle(request);
  }
}
