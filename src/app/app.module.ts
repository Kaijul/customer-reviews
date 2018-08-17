import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewWidgetComponent } from './review-widget/review-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewWidgetComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ReviewWidgetComponent]
})
export class AppModule { }
