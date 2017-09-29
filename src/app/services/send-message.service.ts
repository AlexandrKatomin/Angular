import {Injectable} from '@angular/core';
import {Message} from '../shared/message';
import {Contact} from '../shared/contact';
import {Http,URLSearchParams} from '@angular/http';

import {Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

import {HttpClientModule, HttpParams} from '@angular/common/http';
import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Topic} from '../shared/topic';

@Component({
    providers: [ CookieService]
})
@Injectable()
export class SendMessageService{
    messageArray:Message[]= [];
    url:string = 'http://localhost:5000/api/topic/';
    url2:string = 'http://localhost:5000/api/message/';
    values: Topic[] = [{id: '3', nameOfTopic: 'топик'} ];
    imageUrl: string = 'http://localhost:5000/api/capcha2';

     allowedOrigins: string = "http://localhost:5000";
    
    constructor(private http: Http, private _cookieService: CookieService) {}

    getArrayTopic2(): Topic[]{
        return this.values;
    }
    getCookie(key: string) {
        return this._cookieService.get(key);
      }

    getArrayTopic() : Observable<Topic[]>{
        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.url,options)
                        .map((resp:Response)=>{                           
                            let usersList = resp.json();                            
                            let users :Topic[] = [];
                            for(let index in usersList){   
                                //console.log(usersList[index]);
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

    getImage(): Observable<File> {
        let headers = new Headers({  });
        let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob, withCredentials: true});


        return this.http
            .get(this.imageUrl, options)
            .map((res: Response) =>{
                console.log('---');
                console.log( res.toString);

                console.log(document.cookie.length);

                return  res.blob();

            })
    }
    
    getImage2(): Observable<File> {
        let headers = new Headers({'Upgrade-Insecure-Requests': '1',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4'
            });
        let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });

        return this.http
            .get(this.imageUrl,options)
            .map((res: Response) => res.blob());
    }

 
    executeCheck(capcha:string) : Observable<boolean>{ 
        let tmp:string = this.imageUrl + '/' + capcha;
        console.log('url:'+tmp );

        let headers = new Headers({});
        let options = new RequestOptions({ withCredentials: true });

        return this.http.get(this.imageUrl+'/'+capcha,options)
                        .map((resp:Response)=>{   
                            let response2 = resp.json();
                           // console.log(response2);   
                            return response2; 
                        });
    }

}
