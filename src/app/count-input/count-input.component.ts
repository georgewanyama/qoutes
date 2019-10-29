import { Component, OnInit, Input} from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-count-input',
  templateUrl: './count-input.component.html',
  styleUrls: ['./count-input.component.css']
})
export class CountInputComponent implements OnInit {
  @Input()
  counterValue = 0;
  
  increment() {
    this.counterValue++;
  }
  countValue = 0;
  decrement() {
    this.countValue ++;
  }


  constructor() { }

  ngOnInit() {
  }

}
