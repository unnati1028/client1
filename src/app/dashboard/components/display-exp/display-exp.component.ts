import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css'],
})
export class DisplayExpComponent implements OnInit {
  @Input()
  exp: any[] = []; //array
  constructor() {}

  ngOnInit(): void {}
}
