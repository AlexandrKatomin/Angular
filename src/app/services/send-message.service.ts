import {Injectable} from '@angular/core';
import {Message} from '../shared/message';
import {Contact} from '../shared/contact';
import {Http,URLSearchParams} from '@angular/http';

import {Response, Headers, RequestOptions} from '@angular/http';

import {HttpClientModule, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Topic} from '../shared/topic';

@Injectable()
export class SendMessageService{
    messageArray:Message[]= [];
    url:string = 'http://localhost:5000/api/topic/';
    url2:string = 'http://localhost:5000/api/message/';
    values: Topic[] = [{id: '3', nameOfTopic: 'топик'} ];

    constructor(private http: Http){}

    getArrayTopic2(): Topic[]{
        return this.values;
    }

    getArrayTopic() : Observable<Topic[]>{    
        return this.http.get(this.url)
                        .map((resp:Response)=>{                           
                            let usersList = resp.json();                            
                            let users :Topic[] = [];
                            for(let index in usersList){                               
                                console.log(usersList[index]);
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
}
