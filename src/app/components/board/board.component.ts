import { Component, Input } from '@angular/core';
import { Board } from 'src/app/models/models';

@Component({
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
})
export class BoardComponent {

  @Input() boards: Board[];

}

