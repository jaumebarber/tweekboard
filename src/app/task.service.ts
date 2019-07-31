import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  doing = [

  ];

  done = [

  ];

  constructor() { }

  getContent() {
    return this.todo;
  }



}
