import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  APP_NAME = 'Tweekboard';
  boards = [];

  constructor(
    private dataSrv: DataService
  ) {}

  ngOnInit() {
    this.getBoards();
  }

  getBoards() {
    this.dataSrv.getBoards()
    .subscribe(boards => this.boards = boards);
  }

}
