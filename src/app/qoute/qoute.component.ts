import { Component, OnInit } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoutes = [
    new Qoute(1, 'You cannot follow somebody you know you should lead', 'Chico', new Date('2019,8,8')),
    new Qoute(2, 'but who fights for you', 'r.h.Sin', new Date('2019,8,8')) ,
    new Qoute(3, 'Love is never wasted for its value does not rest in its reprocity',  'george', new Date('2019,8,10')),
    new Qoute(4, ' Art is to console those who are broken by life', 'litmus',  new Date('2019,8,12')),
   ];
  toogleDetails(index) {
   this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
   }

  addNewQoute(qoute) {
    const qouteLength = this.qoutes.length;
    qoute.id = qouteLength + 1;
    this.qoutes.push(qoute);

    }
  deleteQoute(isComplete, index) {
    if (isComplete) {
        const toDelete = confirm(`Are you sure you want to delete ${this.qoutes[index].name}`);
        if (toDelete) {
            this.qoutes.splice(index, 1);
          }
        }
      }



  constructor() { }

  ngOnInit() {
  }

}
