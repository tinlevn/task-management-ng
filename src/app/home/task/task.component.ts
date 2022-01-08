import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Task, TaskResponse} from 'app/shared/interfaces';
import {map, Observable} from 'rxjs';
import { EnrollmentService } from 'app/enrollment.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit, AfterViewInit {
  _url='https://localhost:44364/api/odata';
  isVisible=false;
  dataSource$: Observable<Task[]> | undefined;
  dts : MatTableDataSource<Task>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dpc2: string[]=['QuoteID','QuoteType','Contact','TaskDescription','DueDate','TaskType'];

  constructor(private enrollmentService: EnrollmentService, private cdr: ChangeDetectorRef){}


  ngOnInit(): void {
    this.dataSource$ = this.enrollmentService.getTask();
    this.dataSource$.subscribe(data => {
      this.dts = new MatTableDataSource(data);
      this.dts.paginator = this.paginator;
      this.dts.sort = this.sort;
    })

    this.cdr.detectChanges();

}
  ngAfterViewInit(): void {

  }
  changeVisibility(){
    this.isVisible = !this.isVisible;
  }

}
