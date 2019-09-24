import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Board } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('boardItem', {static: false}) boardItem: ElementRef;
  dashboard: Board[] = [];

  constructor(
    private dataSrv: DataService
    ) {}

    ngOnInit() {
      this.getBoards();
    }

    ngAfterViewInit() {
      // this.setRandomColor();
    }

    getBoards() {
      this.dataSrv.getBoards()
      .subscribe(boards => this.dashboard = boards);
    }

  //   setRandomColor() {
  //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //     console.log(this.boardItem);
  //     return this.boardItem.nativeElement.style.background = randomColor;
  // }
}
