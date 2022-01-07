import { Component, OnInit } from '@angular/core';
import {Task} from '../task.component';
import { EnrollmentService } from 'app/enrollment.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  taskModel= new Task(undefined,"", "", "", "", "");
  isSubmitted=false;

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.taskModel);
    this._enrollmentService.enroll(this.taskModel)
    .subscribe();
    this.isSubmitted=true;
  }
}
