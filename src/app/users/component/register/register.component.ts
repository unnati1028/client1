import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //ngModel: 2 way binding
  register: Register = new Register();
  error: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        //navigate to login page
        this.router.navigate(['/users/login']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }
}
