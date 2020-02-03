import { Component, OnInit } from '@angular/core';
import { Routine } from '../models/routine.model';
import { RoutineService } from '../services/routine.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { PlanDayService } from '../services/Planday.service';

declare var require: any;

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  dayRoutines: Routine[];
  hebdoRoutines: Routine[];
  todaySubscription: Subscription;

  constructor(private routineService: RoutineService, 
              private plaDayService : PlanDayService, 
              private router: Router) { }

  ngOnInit() {
    console.log("Debug : dayComponent - ngOnInit");
    this.dayRoutines = this.routineService.getQuotiRoutines();
    this.hebdoRoutines=this.routineService.getHebdoRoutines();
    this.plaDayService.getCurrentDay();
    console.log("liste des routines"+this.dayRoutines);
  }
}
