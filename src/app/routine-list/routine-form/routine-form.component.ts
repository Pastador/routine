import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Routine } from '../../models/routine.model';
import { RoutineService } from '../../services/routine.service';

@Component({
  selector: 'app-routine-form',
  templateUrl: './routine-form.component.html',
  styleUrls: ['./routine-form.component.scss']
})
export class RoutineFormComponent implements OnInit {
  private name: string;
  private frequence: string;
  private jour: string;
  private ordre: number;
  private isNewTask: Boolean = false;
  idRoutineAModifier: number;
  routineAModifier: Routine;

  constructor(private routineService: RoutineService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // **** Récupération de la routine 
    this.idRoutineAModifier = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.idRoutineAModifier);
    // **** New or not
    if (this.idRoutineAModifier == 0) {
      this.isNewTask = true;
      this.initNew();
    } else {
      this.isNewTask = false;
      this.routineAModifier = this.routineService.getRoutinebyId(this.idRoutineAModifier);
      this.initModif(this.routineAModifier);
    }
  }

  initNew() {
    this.name = "";
    this.frequence = "";
    this.jour = "";
    this.ordre = 0;
  }

  initModif(laRoutine: Routine) {
    console.log('initModif' + laRoutine);
    this.name = laRoutine.name;
    this.frequence = laRoutine.frequence;
    console.log('frequence' + this.frequence);
    this.jour = laRoutine.jour;
    this.ordre = laRoutine.ordre;
  }

  onSubmit(form: NgForm) {
    this.name = form.value['name'];
    this.frequence = form.value['frequence'];
    this.jour = form.value['jour'];
    this.ordre = form.value['ordre'];
    if ( this.isNewTask){
      this.routineService.createNewRoutine(this.name, this.frequence, this.jour, this.ordre);
    }else{
this.routineService.saveRoutine(form.value['id'],this.name, this.frequence, this.jour, this.ordre)
    }
    this.router.navigate(['/routines']);
  }

}
