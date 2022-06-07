import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  error: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    // console.log(JSON.stringify(this.login));
    this.authService.loginUser(this.login).subscribe((response) => {
      console.log(response.token);
      localStorage.setItem('token', response.token);
    });
  }
}
