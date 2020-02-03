import { Routine} from './routine.model';

export class PlanDay {
    public day: number;
    public month: number;
    public year: number;
    public routines: Routine[]

    constructor(
        public date: Date
    )
    {}
}
