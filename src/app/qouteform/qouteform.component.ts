import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import {Qoute} from '../qoute';

@Component({
  selector: 'app-qouteform',
  templateUrl: './qouteform.component.html',
  styleUrls: ['./qouteform.component.css']
})
export class QouteformComponent implements OnInit {

  newQoute = new Qoute(0, '', '', new Date()) ;
  
  @Output() addQoute = new EventEmitter<Qoute>();


  submitQoute() {
    this.addQoute.emit(this.newQoute);
    this.newQoute = new Qoute(0, '', '', new Date()) ;
  }



  constructor() { }

  ngOnInit() {
  }

}