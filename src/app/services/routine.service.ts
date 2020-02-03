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

  getRoutinebyId(id: number) {
    const routine = this.routines.find(
      (s) => {
        return s.id === id;
      }
    );
    console.log('service - routine' + routine);
    return routine;
  }

  getRoutineOfDay(date: Date) {

    //this.routines.filter()
  }

  getQuotiRoutines():Routine[] {
    const searchTerm: string = 'Quotidienne';
    return this.routines.filter(routine =>
      routine.frequence.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }


  getHebdoRoutines():Routine[] {
    const searchTerm: string = 'Hebdomadaire';
    const listeHebdo: Routine[] =  this.routines.filter(routine =>
      routine.frequence.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      return listeHebdo;
  }

  getIndexRoutine(routineToFind: Routine) {
    const index = this.routines.findIndex(
      (laRoutine) => {
        if (laRoutine === routineToFind) {
          return true;
        }
      }
    );
    console.log('DEBUG : identifiant Routine : ' + index);
    return index;
  }

  modifyRoutine(routine: Routine) {
    console.log('DEBUG : RouineServicce - modifyRoutine : ' + routine.id);
    this.routines[this.getIndexRoutine(routine)] = routine;
  }

  createNewRoutine(name: string, frequence: string, jour: string, ordre: number) {
    const id = this.routines[(this.routines.length - 1)].id + 1;
    const newRoutine = new Routine(id, name, frequence, jour, ordre);
    this.routines.push(newRoutine);
    //this.saveRoutines();
    this.emitRoutines();
  }

  removeRoutine(routine: Routine) {
    const routineIndexToRemove = this.routines.findIndex(
      (routineEl) => {
        if (routineEl === routine) {
          return true;
        }
      }
    );
    this.routines.splice(routineIndexToRemove, 1);
    //this.saveRoutines();
    this.emitRoutines();
  }

  saveRoutine(id: number, name: string, frequence: string, jour: string, ordre: number) {
    //todo
  }

}
