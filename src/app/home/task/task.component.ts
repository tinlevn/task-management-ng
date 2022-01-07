import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ITask } from 'app/shared/interfaces';
import { Observable } from 'rxjs';
import { EnrollmentService } from 'app/enrollment.service';
import { MatSort } from '@angular/material/sort';

//Class for easy pushing object parse from JSON
export class Task implements ITask{
  constructor(
    public QuoteID: number | undefined,
    public QuoteType: string,
    public Contact: string,
    public Task: string,
    public DueDate: string,
    public TaskType: string
  ) {}
}


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit, AfterViewInit {
  readonly ROOT_URL ='https://localhost:44364/api/odata';
  isVisible=false;
  tasksarray: Task[]=[];
  dts : MatTableDataSource<Task>;


  dpc2: string[]=['QuoteType','QuoteID','Contact','TaskDescription','DueDate','TaskType'];
  
  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef){}
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  
  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    if (this.dts){
      this.dts.sort = value;
    }
  }
  ngOnInit(): void {
    this.getTask();
    setTimeout(() => {this.dts.paginator = this.paginator;
      this.dts.sort = this.sort;});
    this.dts= new MatTableDataSource(this.tasksarray);
    this.cdr.detectChanges();
    
}
  ngAfterViewInit(): void {
  }
//Get Response in JSON type from backend MVC API
  getTask(){
      this.httpClient.get<JSON>( this.ROOT_URL+ '/Quotes').subscribe(
        (response: JSON) => {         
          //Parse JSON to string and extract values of request
          var formatted_response = JSON.parse(JSON.stringify(response)).value;

          /*GET all quotes and use loop to add object type extracted from JSON 
          response to the private task list*/
          for (let i=0; i<formatted_response.length; i++){
            var obj = formatted_response[i];
            this.tasksarray.push(new Task(
                     obj.QuoteID,
                     obj.QuoteType,
                     obj.Contact,
                     obj.Task,
                     obj.DueDate,
                     obj.TaskType));
          }
          this.dts = new MatTableDataSource<Task>(this.tasksarray);
        } 
      );
  }
  changeVisibility(){
    this.isVisible = !this.isVisible;
  }
  
}
