import { Injectable } from '@angular/core';
import { Routine } from '../models/routine.model';
import { PlanDay } from '../models/PlanDay.model';
import { RoutineService } from '../services/routine.service';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})
export class PlanDayService {
    currentDay: PlanDay;
    routines: Routine[];
    routinesSubject = new Subject<Routine[]>();

    constructor(private routineService: RoutineService) {
        console.log('Debug : Passage dans le constructeur de PlanDayService');
        // this.getCurrentDay();
    }

    /**
     * Définition du jour et récupération des tâches associées
     */
    getCurrentDay(): PlanDay {
        const dateDujour = new Date();
        this.currentDay = new PlanDay(dateDujour);
        this.currentDay.day = dateDujour.getDay();
        this.currentDay.month =  dateDujour.getMonth() + 1;
        this.currentDay.year =  dateDujour.getFullYear();
       // console.log('Debug : Jour semaine : ' + this.currentDay.day);
        this.getCurrentDayRoutines();
        this.getCurrentDayHebdoRoutines();
        return this.currentDay;
    }

    /**
     * Récupération des tâches à effectuer quotidiennement
     */
    getCurrentDayRoutines() {
        console.log('Définition des routines du jour');
        this.currentDay.dayRoutines = this.routineService.getQuotiRoutines();
    }

    /**
     * Récupération des tâches hebdomadaires à réaliser le jour défini
     */
    getCurrentDayHebdoRoutines() {
        console.log('Définition des routines hebdo du jour');
       // console.log('this.currentDay.day' + this.currentDay.day);
        this.currentDay.hebdoRoutines = this.routineService.getHebdoRoutines(this.currentDay.day);
    }
}
