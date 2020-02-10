import { Component, OnInit } from '@angular/core';
import { Routine } from '../models/routine.model';
import { PlanDay } from '../models/PlanDay.model';
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
  // todaySubscription: Subscription;
  planToday: PlanDay;


  constructor(private routineService: RoutineService,
              private plaDayService: PlanDayService,
              private router: Router) { }

  ngOnInit() {
    console.log('Debug : dayComponent - ngOnInit');
    this.planToday = this.plaDayService.getCurrentDay();
    console.log(this.planToday.hebdoRoutines.length);
    console.log(this.planToday.monthRoutine.length);
  }

  monthRoutinesEditable() {
    if (this.planToday.monthRoutine && this.planToday.monthRoutine.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  hebdoRoutinesEditable() {
    if (this.planToday.hebdoRoutines.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
