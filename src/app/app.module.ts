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
import { ButtonModule } from 'primeng/button';
import { FeatherModule } from 'angular-feather';
import { ReactiveFormsModule } from '@angular/forms';
// Services
import { RoutineService } from './services/routine.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { Camera, Heart, Github, Edit, Delete, Trash2 } from 'angular-feather/icons';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewRoutineComponent } from './routine-list/new-routine/new-routine.component';


const appRoutes: Routes = [
  { path: 'routines', component: RoutineListComponent },
  { path: 'routines/new', component: NewRoutineComponent },
  { path: 'routines/view/:id', component: SingleRoutineComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
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
    DayComponent,
    UserListComponent,
    NewUserComponent,
    NewRoutineComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    CheckboxModule,
    ButtonModule,
    FeatherModule.pick(icons)
  ],
  providers: [RoutineService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }