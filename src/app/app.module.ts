import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//  Modules
import { AppComponent } from './app.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { SingleRoutineComponent } from './routine-list/single-routine/single-routine.component';
import { RoutineFormComponent } from './routine-list/routine-form/routine-form.component';
import { Routes } from '@angular/router';
import { DayComponent } from './day/day.component';
import {ButtonModule} from 'primeng/button';
import { FeatherModule } from 'angular-feather';
// Services
import {RoutineService} from './services/routine.service';
import {RouterModule} from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';
import { Camera, Heart, Github,Edit,Delete,Trash2 } from 'angular-feather/icons';


const appRoutes: Routes = [
  { path: 'routines', component: RoutineListComponent },
  { path: 'routines/new', component: RoutineFormComponent },
  { path: 'routines/view/:id', component: SingleRoutineComponent },
  { path: 'day', component: DayComponent }
];

const icons = {
  Camera,
  Heart,
  Github,
  Delete,
  Edit,
  Trash2
};

@NgModule({
  declarations: [
    AppComponent,
    RoutineListComponent,
    SingleRoutineComponent,
    RoutineFormComponent,
    DayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CheckboxModule,
    ButtonModule,
    FeatherModule.pick(icons)
  ],
  providers: [RoutineService],
  bootstrap: [AppComponent]
})

export class AppModule { }