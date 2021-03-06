import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
//--import { FeatherModule } from 'feather-icons';
import { Camera, Heart, Github, Save } from 'angular-feather/icons';
//--import { Camera, Heart, Github } from 'feather-icons/dist/icons';


// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  Save
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
