import { Component } from '@angular/core';
import{Qoute} from './qoute';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qoutes = [
    new Qoute(1, 'You cannot follow somebody you know you should lead', 'Chico', new Date('2018,8,8')),
    new Qoute(2, 'but who fights for you', 'r.h.Sin', new Date('2018,8,8')) ,
    new Qoute(3, 'Love is never wasted for its value does not rest in its reprocity',  'C.S.Lewis', new Date('2018,8,10')),
    new Qoute(4, ' Art is to console those who are broken by life', 'Van Gogh',  new Date('2018,8,12')),
   ];
    
}
