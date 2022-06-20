import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItmesComponent } from './media-itmes/media-itmes.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItmesComponent,
    MediaItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
