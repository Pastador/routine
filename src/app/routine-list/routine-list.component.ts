import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routine } from '../models/routine.model';
import { JourSemaineEnum } from '../models/PlanDay.model';
import { RoutineService } from '../services/routine.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
declare var require: any;


@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.scss']
})
export class RoutineListComponent implements OnInit, OnDestroy {

  routines: Routine[];
  routineSubscription: Subscription;
  actionForm: string;
  searchText: string;
  jourSemaine: JourSemaineEnum;

  constructor(private routineService: RoutineService, private router: Router) { }


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
    this.actionForm = 'new';
    this.router.navigate(['routines/form/0']);
  }

  onModifyRoutine(routine: Routine) {
    const id = routine.id;
    console.log('Routine list component id : ' + id);
    this.router.navigate(['routines/form/' + id]);
  }

  onDeleteRoutine(routine: Routine) {
    this.routineService.removeRoutine(routine);
  }

  onViewRoutine(id: number) {
    // this.router.navigate(['/books', 'view', id]);
  }

  onSaveRoutines(){
this.routineService.saveRoutine();
  }

  ngOnDestroy() {
    this.routineSubscription.unsubscribe();
  }
}
