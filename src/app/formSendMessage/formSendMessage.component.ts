import {Component, OnInit} from '@angular/core';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import 'rxjs/add/operator/catch';

import {Message} from '../shared/message';
import {Contact} from '../shared/contact';
import {SendMessageService} from '../services/send-message.service';

// import {Topic} from '../services/send-message.service';
 import {Topic} from '../shared/topic';


@Component({
    moduleId: module.id,
    selector: 'app-form-send-message',
    templateUrl: 'formSendMessage.component.html',
    styleUrls:['formSendMessage.component.css'],
    providers:[SendMessageService]
})
export class FormSendMessageComponent implements OnInit {
       
        topics: string[]= [];
        // contact: Contact = new Contact('', '', '');
        defaultOption: string= '';
        message: Message = new Message(new Contact('', '', ''), new Topic( '', ''), '');
        captcha: string= '';

        model: any= {};

        topics2: Topic[]= [];
        EMAIL_PATTERN = '[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}]';

        PHONE_PATTERN = /\(\d{3}\)\-\d{3}\-\d{4}/;
        PHONE_MASK = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        phone2: string;
        recevedMessage: any;



        constructor(private sendService: SendMessageService) { }
        sendMessage() {
            console.log(4);
             this.sendService.addMessage2(this.message).subscribe((data) => {this.recevedMessage = data;});
        }
        ngOnInit() {
            console.log(this.topics[0]);
            this.sendService.getArrayTopic().subscribe((data)=>this.topics2=data);
          //  this.topics2 = this.sendService.getArrayTopic2();
        }
       /* addNewMessage(name: string, email: string, phone: string, text: string) {
            this.message = new Message(new Contact(name, email, phone),'', text);
        }*/
    }
