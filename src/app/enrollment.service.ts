import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Task } from './home/task/task.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url='https://localhost:44364/api/odata/Quotes';

  constructor(private _http: HttpClient) { }

  enroll(task:Task){
    return this._http.post<Task>(this._url,task);
  }
  getAll(task: Task[]): Task[]{
    this._http.get<JSON>(this._url).subscribe(
      (data: JSON)=>{
        var formatted_response=JSON.parse(JSON.stringify(data)).value;
        for (let i=0; i<formatted_response.length; i++){
          task.push(new Task(
            formatted_response[i].QuoteID,
            formatted_response[i].QuoteType,
            formatted_response[i].Contact,
            formatted_response[i].Task,
            formatted_response[i].DueDate,
            formatted_response[i].TaskType));
        }
      }
      
    );
    return task;
  }

  deleteTask(number: number){
    return this._http.delete<number>(this._url+ '('+number+')');
  }
}
