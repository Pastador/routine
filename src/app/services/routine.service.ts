import { Injectable } from '@angular/core';
import { Routine } from '../models/routine.model';
import { Subject } from 'rxjs/Subject';

declare var require: any;
var JSON = require('../files/test.json');

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  
  routines: Routine[];  
  routinesSubject = new Subject<Routine[]>();

  constructor() {
    this.getRoutines();
}
  
  emitRoutines() {
    this.routinesSubject.next(this.routines);
  }

  getRoutines() {
    this.routines = JSON.listeRoutines;
    this.emitRoutines();
  }

  createNewRoutine(newRoutine: Routine) {
    this.routines.push(newRoutine);
    //this.saveRoutines();
    this.emitRoutines();
  }

  removeBook(routine: Routine) {
    const routineIndexToRemove = this.routines.findIndex(
      (routineEl) => {
        if(routineEl === routine) {
          return true;
        }
      }
    );
    this.routines.splice(routineIndexToRemove, 1);
    //this.saveRoutines();
    this.emitRoutines();
  }

}
