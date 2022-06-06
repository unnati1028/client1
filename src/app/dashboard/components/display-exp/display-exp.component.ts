import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css'],
})
export class DisplayExpComponent implements OnInit {
  @Input()
  exp: any[] = []; //array
  @Output()
  expId: EventEmitter<string> = new EventEmitter<string>();
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    console.log('Input value:::==>', this.exp);
  }

  deleteExp(id: string) {
    console.log('InChild :::::' + id);
    this.expId.emit(id);
  }
}
