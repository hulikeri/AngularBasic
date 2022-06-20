import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of media items';
  BindingProperty = 'Binded with property';
  ContentPro = 'Binded with contentqq'
  isReturnable(){
    return true;
  }
  firstMediaItems = {
    id: null,
    name: 'Ling',
    medium: 'Criud Operation with next buttons'
  }

  OnMediaItemDelete(mediaInput: any)
   {

  }
}
