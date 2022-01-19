import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Task} from 'app/shared/interfaces';
import {map, Observable} from 'rxjs';
import { EnrollmentService } from 'app/enrollment.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit, AfterViewInit {
  //_url='https://localhost:44364/api/';

  //isVisible=false;

  dataSource$: Observable<Task[]> | undefined;
  dataSource : MatTableDataSource<Task>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayColumn: string[]=['QuoteID','QuoteType','Contact','Task','DueDate','TaskType','actions'];

  constructor(private enrollmentService: EnrollmentService, private cdr: ChangeDetectorRef){}


  ngOnInit(): void {
    this.dataSource$ = this.enrollmentService.getTask();
    this.dataSource$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {

  }

  viewTask(){}

  editTask(){}

  deleteTask(ID: number){
    this.enrollmentService.deleteTask(ID).subscribe();
    
  }
  
}
