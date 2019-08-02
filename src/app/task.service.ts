import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasksUrl = 'api/tasks';
  tasks: Task[];

  constructor( private http: HttpClient) { }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }
}
