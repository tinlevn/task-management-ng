import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {map, Observable} from 'rxjs';
import {Task} from "./shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url='https://localhost:44364/api/';

  constructor(private _http: HttpClient) { }

  //GET all tasks
  getTask(): Observable<Task[]> {
    return this._http.get<Task[]>(this._url+ 'Quotes');
  }

  //POST task
  createNewTask(task: Partial<Task>){
    return this._http.post(this._url + 'Quotes',task);
  }
  
  //DELETE task by ID 
  /*This should be put in the same row in mat-table*/
  deleteTask(number: number){
    return this._http.delete('https://localhost:44364/api/Quotes/'+number);
  }

  //PUT task
  updateTask(task: Task){
    return this._http.put(this._url + 'Quotes',task);
  }
}
