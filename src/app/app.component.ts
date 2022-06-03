import { Component } from '@angular/core';

@Component({
  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html', //will provide the html file for rendering
  styleUrls: ['./app.component.css'], //will provide the styles for formatting
})
export class AppComponent {
  title = 'client';
}
