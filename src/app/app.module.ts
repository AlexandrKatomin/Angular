import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import {HttpModule} from '@angular/http';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {FormSendMessageComponent} from './formSendMessage/formSendMessage.component';

@NgModule({
  declarations: [    
    FormSendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule
  ],
  providers: [CookieService],
  bootstrap: [    
    FormSendMessageComponent
  ]
})
export class AppModule { }
