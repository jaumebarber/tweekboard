import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {

  db = {
    boards: [
      {
        id: 1,
        title: 'Focus for today',
        type: 'board',
        lists: [
          { id: 1,
            type: 'list',
            title: 'ToDo',
            cards: [
              { id: 1, type: 'card', text: 'Get to work' },
              { id: 2, type: 'card', text: 'Eat' },
              { id: 3, type: 'card', text: 'Sleep' },
              { id: 4, type: 'card', text: 'Dance' },
              { id: 5, type: 'card', text: 'Shout' }
            ]
          },
          { id: 2, type: 'list', title: 'Doing', cards: [] },
          { id: 3, type: 'list', title: 'Done', cards: [] },
        ]
      },
    ]
  };

  createDb() {
    const data = this.db;
    return { data };
  }
}


