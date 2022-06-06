import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-edu',
  templateUrl: './display-edu.component.html',
  styleUrls: ['./display-edu.component.css'],
})
export class DisplayEduComponent implements OnInit {
  @Input()
  edu: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
