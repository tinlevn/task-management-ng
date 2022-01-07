import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'app/enrollment.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {
  ID: number=1;
  isSubmitted=false;

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._enrollmentService.deleteTask(this.ID).subscribe();
    this.isSubmitted=true;
  }
}
