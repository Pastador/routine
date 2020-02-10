import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//  Modules
import { AppComponent } from './app.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineFormComponent } from './routine-list/routine-form/routine-form.component';
import { Routes } from '@angular/router';
import { DayComponent } from './day/day.component';
import { ButtonModule } from 'primeng/button';
import { FeatherModule } from 'angular-feather';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { RoutineFilterPipe } from './filter/routine-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
// Services
import { RoutineService } from './services/routine.service';
import { PlanDayService } from './services/Planday.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { Camera, Heart, Github, Edit, Delete, Trash2, Save } from 'angular-feather/icons';
import { UserListComponent } from './user-list/user-list.component';



const appRoutes: Routes = [
  { path: 'routines', component: RoutineListComponent },
  { path: 'routines/form/:id', component: RoutineFormComponent },
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
  Trash2,
  Save
};

@NgModule({
  declarations: [
    AppComponent,
    RoutineListComponent,
    RoutineFormComponent,
    DayComponent,
    UserListComponent,
    NewUserComponent,
    RoutineFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CheckboxModule,
    ButtonModule,
    HttpClientModule,
    FeatherModule.pick(icons)
  ],
  providers: [RoutineService, PlanDayService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }