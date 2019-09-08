import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let data = {
      boards: [
        {
          id: 1,
          title: 'Focus for today',
          type: 'board',
          columns: [
            { id: 1,
              type: 'column',
              title: 'ToDo',
              tasks: [
                { id: 1, type: 'task', text: 'Get to work' },
                { id: 2, type: 'task', text: 'Eat' },
                { id: 3, type: 'task', text: 'Sleep' },
                { id: 4, type: 'task', text: 'Dance' },
                { id: 5, type: 'task', text: 'Shout' }
              ]
            },
            { id: 2, type: 'column', title: 'Doing', tasks: [] },
            { id: 3, type: 'column', title: 'Done', tasks: [] },
          ]
        }
      ]
    };

    return { data };
  }
}


