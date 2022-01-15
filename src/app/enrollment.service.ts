import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {map, Observable} from 'rxjs';
import {Task, TaskResponse} from "./shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url='https://localhost:44364/api/odata';

  constructor(private _http: HttpClient) { }


  //POST task
  createNewTask(task: Partial<Task>){
    return this._http.post(this._url + '/Quotes',task);
  }
  //GET all tasks
  getTask(): Observable<Task[]> {
    return this._http.get<TaskResponse>( this._url+ '/Quotes').pipe(map(data => data.value));
  }
  //DELETE task by ID 
  /*This should be put in the same row in mat-table*/
  deleteTask(number: number){
    return this._http.delete<number>(this._url+ '/Quotes('+number+')');
  }

  //PUT task
  updateTask(){

  }

  
}
