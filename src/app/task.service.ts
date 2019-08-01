import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  constructor() { }

  getContent() {
    return this.tasks;
  }

  createTask(task: string): void {
    this.tasks.push(task);
  }
}
