import { Component, OnInit, Input } from '@angular/core';
import { Routine } from 'src/app/models/routine.model';

@Component({
  selector: 'app-single-routine',
  templateUrl: './single-routine.component.html',
  styleUrls: ['./single-routine.component.scss']
})
export class SingleRoutineComponent implements OnInit {
  @Input() routineActive:Routine;
  selectedValues: string[] = [];
  value: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.routineActive);
  }

}
