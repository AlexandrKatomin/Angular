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

    url4:string = 'http://localhost:5000/api/values/';

    url3: string = 'https://requestb.in/11ywe9h1';

    url5:string ='http://localhost:5000/api/message/';
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
    private extractData(res: Response) {
        let body = res.json();
            return body.data || {};
        }
        private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
        }

    addMessage(obj: Message){
                const body = JSON.stringify(obj);

                let headers: Headers = new Headers({ 'Content-Type': 'text/plain' });

                return this.http.post(this.url2, body, { headers: headers })
                                .map((resp:Response)=>resp.json())
                                .catch((error:any) =>{return Observable.throw(error);}); 
            }

    addMessage2(book:Message) {
        console.log('okk');
        let bodyMessage = JSON.stringify(book);
        let body = JSON.stringify({"message": bodyMessage});
        var params = new URLSearchParams();
        params.set('message', '456');
        let headers = new Headers({'Content-Type':  'text/plain'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url2, body,options)
                            .map((resp:Response)=>resp.json())
                            .catch((error:any) =>{   return Observable.throw(error);}); 
    }
    rt:string;

    addMessage3() : Observable<any>{
        console.log(this.url5 );
        this.rt =  this.url5 + '?' + 'name=' + 'nn';  
        return this.http.get(this.rt)}
}
