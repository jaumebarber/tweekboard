import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {id: 1, name: 'Get to work'},
      {id: 2, name: 'Eat'},
      {id: 3, name: 'Sleep'},
      {id: 4, name: 'Dance'},
      {id: 5, name: 'Shout'},
    ];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}


