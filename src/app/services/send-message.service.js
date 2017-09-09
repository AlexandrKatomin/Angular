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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());
exports.Topic = Topic;
var SendMessageService = (function () {
    function SendMessageService(http) {
        this.http = http;
        this.messageArray = [];
        this.url = "http://localhost:5000/api/topic/";
        this.topicArray = ["пожелания", "тех. поддержка", "жалоба"];
    }
    SendMessageService.prototype.addMessage = function (newMessage) {
        this.messageArray.push(newMessage);
    };
    SendMessageService.prototype.getTopicArray = function () {
        return this.topicArray;
    };
    SendMessageService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    SendMessageService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    SendMessageService.prototype.getList = function () {
        return this.http.get(this.url).map(this.extractData).catch(this.handleErrorObservable);
    };
    SendMessageService.prototype.getArrayTopic = function () {
        return this.http.get(this.url)
            .map(function (resp) {
            var usersList = resp.json().data;
            var users = [];
            for (var index in usersList) {
                console.log(usersList[index]);
                var user = usersList[index];
                users.push({ id: user.id, nameOfTopic: user.nameOfTopic });
            }
            return users;
        });
    };
    SendMessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SendMessageService);
    return SendMessageService;
}());
exports.SendMessageService = SendMessageService;
//# sourceMappingURL=send-message.service.js.map