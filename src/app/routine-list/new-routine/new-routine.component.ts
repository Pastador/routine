import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';

@Component({
  selector: 'app-new-routine',
  templateUrl: './new-routine.component.html',
  styleUrls: ['./new-routine.component.scss']
})
export class NewRoutineComponent implements OnInit {

  constructor(private routineService: RoutineService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
  }
}
