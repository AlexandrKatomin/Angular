import {Contact} from './contact';
import {Topic} from './topic';

export class Message{
    
    constructor (public contact:Contact, public topic:Topic, public textOfMessage:string ){}
}