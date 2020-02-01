import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routine } from '../models/routine.model';
import { RoutineService } from '../services/routine.service';
import { Subscription } from 'rxjs/Subscription';
import { SingleRoutineComponent } from '../routine-list/single-routine/single-routine.component';
import { Router } from '@angular/router';
declare var require: any;
var JSON = require('../files/test.json');

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.scss']
})
export class RoutineListComponent implements OnInit, OnDestroy   {

  routines: Routine[];
  routineSubscription : Subscription;
  constructor(private routineService:RoutineService, private router: Router) { }

  ngOnInit() {
   
   this.routineSubscription = this.routineService.routinesSubject.subscribe(
       (routines: Routine[]) => {
      this.routines = routines;
    }
  );
  this.routineService.emitRoutines();
  // console.log("liste des routines"+this.routines);
  }

  onNewRoutine() {
   this.router.navigate(['routines/form/0']);
  }

  onModifyRoutine(routine: Routine) {
    let id=routine.id;
    console.log('Routine list component id : '+id);
    this.router.navigate(['routines/form/'+id]);
  }

  onDeleteRoutine(routine: Routine) {
    this.routineService.removeRoutine(routine);
  }

  onViewRoutine(id: number) {
   // this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.routineSubscription.unsubscribe();
  }
}