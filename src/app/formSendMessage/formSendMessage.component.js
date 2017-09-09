"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_1 = require('../shared/message');
var contact_1 = require('../shared/contact');
var send_message_service_1 = require('../services/send-message.service');
var FormSendMessageComponent = (function () {
    function FormSendMessageComponent(sendService) {
        this.sendService = sendService;
        this.contact = new contact_1.Contact("", "");
        this.defaultOption = "";
        this.message = new message_1.Message(this.contact, "", "");
        this.captcha = "";
        this.model = {};
        this.topics2 = [];
        this.PHONE_PATTERN = /\(\d{3}\)\-\d{3}\-\d{4}/;
    }
    FormSendMessageComponent.prototype.sendMess = function (massage) {
        // this.sendService.addMessage(massage);
        // this.sendService.getArrayTopic().subscribe((data)=>this.topics2=data);
        //console.log(massage.text);
    };
    FormSendMessageComponent.prototype.ngOnInit = function () {
        this.topics = this.sendService.getTopicArray();
        console.log(this.topics[0]);
        //this.sendService.getArrayTopic().subscribe((data)=>this.topics2=data);
    };
    FormSendMessageComponent.PHONE_MASK = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    FormSendMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'formSendMessage',
            templateUrl: 'formSendMessage.component.html',
            styleUrls: ['formSendMessage.component.css'],
            providers: [send_message_service_1.SendMessageService]
        }), 
        __metadata('design:paramtypes', [send_message_service_1.SendMessageService])
    ], FormSendMessageComponent);
    return FormSendMessageComponent;
}());
exports.FormSendMessageComponent = FormSendMessageComponent;
//# sourceMappingURL=formSendMessage.component.js.map