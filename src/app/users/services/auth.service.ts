import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
const headerData = {
  headers: { 'Content-Type': 'application/json' },
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //perform dependency injection

  api = '/api/users/';
  constructor(private httpClient: HttpClient) {}

  registerUser(register: Register): Observable<any> {
    return this.httpClient.post(this.api + 'register', register);
  }

  loginUser(login: Login): Observable<any> {
    return this.httpClient.post(this.api + 'login', login);
  }
}
