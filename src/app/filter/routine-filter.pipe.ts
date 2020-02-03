import { PipeTransform, Pipe } from '@angular/core';
import { Routine } from '../models/routine.model';

@Pipe({
    name: 'routineFilter'
})

export class RoutineFilterPipe implements PipeTransform {
    transform(routines: Routine[], searchTerm: string): Routine[] {
        if (!routines || !searchTerm) {
            return routines;
        }
        console.log('Debug : routineFilter'+ routines);
        console.log('Debug : searchTerm : '+ searchTerm);
       return routines.filter(routine =>
           routine.frequence.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
//https://www.youtube.com/watch?v=1TFSibbnkj0
//dans Html remplacer 
//<tr *ngFor="let routine of routines >
//par
//<tr *ngFor="let routine of routines | routineFilter:searchText">