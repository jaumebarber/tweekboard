import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  data$;
  title = 'Tweekboard';
  hasTitle = false;
  defaultValue = 'Focus for today';
  projectTitle = '' || this.defaultValue;

  constructor(
    private dataSrv: DataService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataSrv.getData()
      .subscribe(data => this.data$ = data);
  }

  saveTitle(): void {
    if (this.projectTitle) {
      this.hasTitle = !this.hasTitle;
    }
  }
}
