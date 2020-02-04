import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Routine } from '../../models/routine.model';
import { JourSemaineEnum } from '../../models/PlanDay.model';
import { RoutineService } from '../../services/routine.service';

@Component({
  selector: 'app-routine-form',
  templateUrl: './routine-form.component.html',
  styleUrls: ['./routine-form.component.scss']
})
export class RoutineFormComponent implements OnInit {
  private name: string;
  private frequence: string;
  private jour: number;
  private ordre: number;
  private isNewTask: Boolean = false;
  idRoutineAModifier: number;
  routineAModifier: Routine;

  constructor(private routineService: RoutineService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // **** Récupération de la routine 
    this.idRoutineAModifier = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(this.idRoutineAModifier);
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
    this.jour = 0;
    this.ordre = 0;
  }

  initModif(laRoutine: Routine) {
    console.log('DEBUG :FormComponent - initModif : ' + laRoutine);
    this.name = laRoutine.name;
    this.frequence = laRoutine.frequence;
    console.log('frequence : ' + this.frequence);
    this.jour = laRoutine.jour;
    this.ordre = laRoutine.ordre;
  }

  changeFrequence(value: any) {
    console.log("La fréquence a changé : " + this.frequence);
    // (change)="changeFrequence(option.value)"
  }

  onSubmit(form: NgForm) {
    console.log('OnSubmit');
    this.name = form.value['name'];
    this.frequence = form.value['frequence'];
    this.jour = parseInt(form.value['jour']);
    console.log('modif du jour : ' + this.jour);
    this.ordre = form.value['ordre'];
    if (this.isNewTask) {
      this.routineService.createNewRoutine(this.name, this.frequence, this.jour, this.ordre);
    } else {
      this.routineAModifier.name = this.name;
      this.routineAModifier.frequence = this.frequence;
      this.routineAModifier.jour = this.jour;
      this.routineAModifier.ordre = this.ordre;
      this.routineService.modifyRoutine(this.routineAModifier);
    }
    this.router.navigate(['/routines']);
  }
  onBack() {
    this.router.navigate(['/routines']);
  }
}