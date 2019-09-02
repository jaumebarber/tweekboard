import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../models/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {id: 1, text: 'Get to work'},
      {id: 2, text: 'Eat'},
      {id: 3, text: 'Sleep'},
      {id: 4, text: 'Dance'},
      {id: 5, text: 'Shout'},
    ];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}


