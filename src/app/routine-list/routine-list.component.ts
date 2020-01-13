import { Component, OnInit } from '@angular/core';
import { Routine } from '../models/routine.model';
import { SingleRoutineComponent } from '../routine-list/single-routine/single-routine.component';
declare var require: any;
var JSON = require('../files/test.json');

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.scss']
})
export class RoutineListComponent implements OnInit {

  routines: Routine[];
  constructor() { }

  ngOnInit() {
    this.routines = JSON.listeRoutines;
    console.log("liste des routines"+this.routines);
  }

}
