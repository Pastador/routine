import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//  Modules
import { AppComponent } from './app.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { SingleRoutineComponent } from './routine-list/single-routine/single-routine.component';
import { RoutineFormComponent } from './routine-list/routine-form/routine-form.component';
import { Routes } from '@angular/router';
// Services
import {RoutineService} from './services/routine.service';
import {RouterModule} from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';

const appRoutes: Routes = [
  { path: 'routines', component: RoutineListComponent },
  { path: 'routines/new', component: RoutineFormComponent },
  { path: 'routines/view/:id', component: SingleRoutineComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoutineListComponent,
    SingleRoutineComponent,
    RoutineFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CheckboxModule
  ],
  providers: [RoutineService],
  bootstrap: [AppComponent]
})

export class AppModule { }