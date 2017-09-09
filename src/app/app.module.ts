import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';


import {HttpModule} from '@angular/http';


import {FormSendMessageComponent} from './formSendMessage/formSendMessage.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FormSendMessageComponent
  ]
})
export class AppModule { }
