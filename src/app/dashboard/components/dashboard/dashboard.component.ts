import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private profileService: ProfileService) {}
  //handling initialization of your component
  //this rest call should happen inside the ngonit
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      () => {},
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
