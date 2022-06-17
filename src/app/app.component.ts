import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
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
  firstMediaItems = {
    Id: 1,
    Name: 'Ling',
    Medium: 'Series'
  }

  OnMediaItemDelete(mediaInput: any)
   {

  }
}
