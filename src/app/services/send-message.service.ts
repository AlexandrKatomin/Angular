import {Injectable} from '@angular/core';
import {Message} from '../shared/message';
import {Contact} from '../shared/contact';
import {Http,URLSearchParams} from '@angular/http';

import {Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';

import {HttpClientModule, HttpParams} from '@angular/common/http';
import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Topic} from '../shared/topic';

@Injectable()
export class SendMessageService{    
    url: string = 'http://localhost:5000/api/topic/';
    url2: string = 'http://localhost:5000/api/message/';
    imageUrl: string = 'http://localhost:5000/api/capcha2';    

    constructor(private http: Http) {}

    getArrayTopic() : Observable<Topic[]>{
        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url,options)
                        .map((resp:Response)=>{
                            let usersList = resp.json();
                            let users :Topic[] = [];
                            for (let index in usersList) {
                                let user = usersList[index];
                                users.push({id: user.id, nameOfTopic: user.nameOfTopic});
                            }
                            return users;
                        });
    }

    sendMessage(message:Message) {        
        let bodyMessage = JSON.stringify(message);
        let body = JSON.stringify({"message": bodyMessage});       
        let headers = new Headers({'Content-Type':  'text/plain'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url2, body,options)
                            .map((resp:Response)=>resp.json())
                            .catch((error:any) =>{   return Observable.throw(error);}); 
    }

    getImage(): Observable<Blob> {
        let options = new RequestOptions({responseType: ResponseContentType.Blob, withCredentials: true});
        return this.http.get(this.imageUrl, options)
                        .map((res: Response) =>res.blob());
    }

    executeCheck(capcha:string): Observable<boolean> {
       let options = new RequestOptions({ withCredentials: true });
        return this.http.get(this.imageUrl + '/' + capcha, options)
                        .map((resp: Response) => resp.json());
    }
}
