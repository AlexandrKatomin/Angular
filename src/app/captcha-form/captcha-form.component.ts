import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';

class ResultModel {
    public isSuccess: boolean;
    public message: string;
    public data: any;
}
@Component({
    moduleId: module.id,
    selector: "my-app2",
    templateUrl: 'captcha-form.component.html'
   // styles: [require('./app.component.css')]
})
export class CapchaFormComponent {
    private api: string = '/api/mycaptcha';
    private api2:string = 'http://localhost:5000/api/mycaptcha';
    private captchaUrl: 'http://localhost:5000/api/mycaptcha/captcha';
   
    title: string = "Login";
    isLogin: boolean;
    message: string;
    username: string;
    password: string;
    code: string;
    constructor(private http: Http) {
        //this.loadUserInfo();
    }
    /*
    loadUserInfo(): void {
        this.http.get(this.api).subscribe(
            (response) => {
                let result: ResultModel = response.json();
                if (!result.isSuccess) {
                    this.showMessage(result.message);
                } else if (result.data) {
                    this.username = result.data as string;
                    this.isLogin = true;
                } else {
                    this.clear();
                }
            });
    }
    login(): void {
        this.clearMessage();
        this.http.post(this.api,
            {
                username: this.username,
                password: this.password,
                code: this.code
            }).subscribe(
            (response) => {
                let result: ResultModel = response.json();
                if (!result.isSuccess) {
                    this.showMessage(result.message);
                    this.resetCaptcha();
                } else {
                    this.showMessage(`Login successfully`);
                    this.isLogin = true;
                }
            });
    }
    logout(): void {
        this.http.delete(this.api).subscribe(
            (response) => {
                let result: ResultModel = response.json();
                if (!result.isSuccess) {
                    this.showMessage(result.message);
                } else {
                    this.clear();
                }
            });
    }
    */
    resetCaptcha(): void {
        this.code = "";
      
    }
    clear(): void {
        this.isLogin = false;
        this.username = "";
        this.password = "";
        this.resetCaptcha();
        this.clearMessage();
    }
    clearMessage(): void {
        this.message = "";
    }
    showMessage(message: string): void {
        this.message = message;
    }
}
