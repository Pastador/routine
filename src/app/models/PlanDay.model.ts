import { Routine } from './routine.model';


export enum JourSemaineEnum {
    lundi = 1,
    mardi = 2,
    mercredi = 3,
    jeudi = 4,
    vendredi = 5,
    samedi = 6,
    dimanche = 7
}

export class PlanDay {

    public dayRoutines: Routine[];
    public hebdoRoutines: Routine[];
    public monthRoutine: Routine[];
    public day: number;
    public month: number;
    public year: number;

    constructor(
        public date: Date
    ) {
        this.day = 0;
        console.log('debug: PlanDayModel - day : ' + this.day);
        console.log('debug: PlanDayModel - month : ' + this.month);
        console.log('debug: PlanDayModel - year : ' + this.year);
    }
}
