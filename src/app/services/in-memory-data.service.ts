import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const columns = [
      { id: 1,
        title: 'ToDo',
        tasks: [
          {id: 1, text: 'Get to work'},
          {id: 2, text: 'Eat'},
          {id: 3, text: 'Sleep'},
          {id: 4, text: 'Dance'},
          {id: 5, text: 'Shout'}
        ]
      },
      { id: 2, title: 'Doing', tasks: []},
      { id: 3, title: 'Done', tasks: []},
    ];

    return { columns };
  }
}


