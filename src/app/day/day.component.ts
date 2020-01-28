import { Component, OnInit } from '@angular/core';
import { Routine } from '../models/routine.model';
declare var require: any;
var JSON = require('../files/test.json');

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  routines: Routine[];

  constructor() { }

  ngOnInit() {
    this.routines = JSON.listeRoutines;
    console.log("liste des routines"+this.routines);
  }
}
