import {Component, OnInit, ViewChild} from '@angular/core';

import { EnrollmentService } from 'app/enrollment.service';
import {Task} from "../../../shared/interfaces";
import {NgForm} from "@angular/forms";
import {Observable, of} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})

export class TaskformComponent implements OnInit {
  @ViewChild('taskForm') taskForm: NgForm;
  isSubmitted=false;
  QuoteType = '';
  Contact = '';
  Description = '';
  DueDate = '';
  TaskType =  '';
  constructor(private _enrollmentService: EnrollmentService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const request: Partial<Task> = {
      QuoteType: this.QuoteType,
      Contact: this.Contact,
      Task: this.Description,
      DueDate: this.DueDate,
      TaskType: this.TaskType
    };
    this._enrollmentService.createNewTask(request)
    .subscribe();
    this.isSubmitted=true;
    this.router.navigate(['/all']);
  }
}
