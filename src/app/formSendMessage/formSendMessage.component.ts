import {Component, OnInit} from '@angular/core';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import 'rxjs/add/operator/catch';

import {Message} from '../shared/message';
import {Contact} from '../shared/contact';
import {SendMessageService} from '../services/send-message.service';
import {Topic} from '../shared/topic';
import {CookieService} from 'angular2-cookie/core';

@Component({
    moduleId: module.id,
    selector: 'app-form-send-message',
    templateUrl: 'formSendMessage.component.html',
    styleUrls:[   
    'formSendMessage.component.css' 
],
    providers:[
      SendMessageService,
      CookieService
       
    ]
})
export class FormSendMessageComponent implements OnInit {
        title = 'test';
        message: Message = new Message(new Contact('', '', ''), new Topic( '', ''), '');       
        topics2: Topic[]= [];
        PHONE_PATTERN = /\(\d{3}\)\-\d{3}\-\d{4}/;
        PHONE_MASK = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        recevedMessage: any;

        captcha: string='';

        isImageLoading: boolean;
        yourImageUrl: string;
        imageToShow: any;

        isTrue: boolean= true;
       
         
        
        constructor(          private sendService: SendMessageService) { }
        sendMessage() {
            console.log('message was send');
             this.sendService.sendMessage(this.message).subscribe((data) => {this.recevedMessage = data;});
        }
        ngOnInit() {     
            console.log(" form initialize");    
            
            this.getImageFromService();
            this.sendService.getArrayTopic().subscribe((data)=>this.topics2=data);
          //  this.topics2 = this.sendService.getArrayTopic2(); this is uses mock object
        }

        
        
        createImageFromBlob(image: Blob) {
               let reader = new FileReader();
               reader.addEventListener("load", () => {
                  this.imageToShow = reader.result;
                  console.log('ok');
               }, false);
        
               if (image) {
                console.log('ok2');
                  reader.readAsDataURL(image);
               }
        }
       
        
        getImageFromService() {
            this.isImageLoading = true;
            this.sendService.getImage().subscribe(data => {
              this.createImageFromBlob(data);
              this.isImageLoading = false;
            }, error => {
              this.isImageLoading = false;
              console.log(error);
            });
      }
      sendMessage2() {
        this.executeChech();
       

      }
      executeChech(){
        let response;
         this.sendService.executeCheck(this.captcha).subscribe((data)=>{
          this.isTrue=data;
          if(this.isTrue) this.sendMessage();
         console.log(this.isTrue);
         }); 
      }
    }
