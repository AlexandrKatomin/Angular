import {Contact} from './contact';
 import {Topic} from './topic';
//import {Topic} from '../services/send-message.service';

export class Message{
    
    constructor (public contact:Contact, public topic:Topic, public textOfMessage:string ){}
}