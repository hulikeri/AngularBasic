import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h1{color: blue;}
  h2{color: yellow;}
  h3{color: green;}
  h4{color: maroon;}
  .BodyProperties{background-color: Orange;}
  `]
})
export class AppComponent {
  title = 'Software'
}
