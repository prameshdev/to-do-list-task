import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-task', pathMatch: 'full' },
  { path:'add-task' , component: AddTaskComponent },
  { path: 'edit-task', component: EditTaskComponent},
  { path: 'list-task', component: ListTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
