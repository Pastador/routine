import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  
    routines = [
      {
        id: 1,
        name: 'musculation',
        frequence: 'quotidien',
        jour:''
      },
      {
        id: 2,
        name: 'auto formation informatique',
        frequence: 'quotidien',
        jour:''
      },
      {
        id: 3,
        name: 'objectifs du jour',
        frequence: 'quotidien',
        jour:''
      }
    ];
  
  
  constructor() { }
}
