import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  //TODO: Los modulos siempre van en los imports
  imports: [
    CommonModule
  ]
})
export class HeroModule { }
