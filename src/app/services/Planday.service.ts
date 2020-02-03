import { Injectable } from '@angular/core';
import { Routine } from '../models/routine.model';
import { PlanDay } from '../models/PlanDay.model';
import { Subject } from 'rxjs/Subject';
//declare var require: any;
//var JSON = require('../files/test.json');

@Injectable({
    providedIn: 'root'
})
export class PlanDayService {
    currentDay: PlanDay;
    routines: Routine[];
    

    constructor() {
        console.log("Debug : Passage dans le constructeur de PlanDayService");
    }

    getCurrentDay() {
        const dateDujour = new Date();
        this.currentDay = new PlanDay(dateDujour);
        this.currentDay.day = dateDujour.getDay();
        this.currentDay.month =(dateDujour.getMonth() + 1);
        this.currentDay.year = dateDujour.getFullYear();
    }


    getCurrentDayRoutines(currentDay : PlanDay) {
        console.log('Définition des routines du jour');

    }

}