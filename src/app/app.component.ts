import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Software';
  BindingProperty = 'Binded with property';
  ContentPro = 'Binded with contentqq'
  isReturnable(){
    return true;
  }
}
