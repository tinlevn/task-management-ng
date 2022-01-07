import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TaskComponent } from "./task.component";
import { TaskformComponent } from './taskform/taskform.component';
@NgModule({
    imports: [CommonModule],
    declarations: [TaskComponent, TaskformComponent],
    exports: [TaskComponent]
})
export class TaskModule {}