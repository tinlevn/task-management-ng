import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './home/task/task.component';
import { TaskformComponent } from './home/task/taskform/taskform.component';

const routes: Routes = [
  {path: ' ', component: HomeComponent},
  {path:'all', component: TaskComponent},
  {path: 'addtask', component: TaskformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
