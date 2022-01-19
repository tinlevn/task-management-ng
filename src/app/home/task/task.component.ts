import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Task} from 'app/shared/interfaces';
import {map, Observable} from 'rxjs';
import { EnrollmentService } from 'app/enrollment.service';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit, AfterViewInit {

  dataSource$: Observable<Task[]> | undefined;
  dataSource : MatTableDataSource<Task>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) tasktable!: MatTable<Task>;

  displayColumn: string[]=['QuoteID','QuoteType','Contact','Task','DueDate','TaskType','actions'];

  constructor(private enrollmentService: EnrollmentService, private cdr: ChangeDetectorRef, private router: Router){}


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

  editTask(current: Task){
    this.router.navigate(['/addtask']);
    //this.enrollmentService.updateTask(current).subscribe();
  }

  deleteTask(ID: number){
    this.enrollmentService.deleteTask(ID).subscribe();
    this.tasktable.renderRows();
  }
  
}
