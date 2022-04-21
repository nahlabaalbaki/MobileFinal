import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoList2PageRoutingModule } from './to-do-list2-routing.module';

import { ToDoList2Page } from './to-do-list2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoList2PageRoutingModule
  ],
  declarations: [ToDoList2Page]
})
export class ToDoList2PageModule {}
