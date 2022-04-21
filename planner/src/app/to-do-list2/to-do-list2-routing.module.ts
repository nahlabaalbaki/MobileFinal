import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoList2Page } from './to-do-list2.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoList2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoList2PageRoutingModule {}
