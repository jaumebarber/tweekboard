import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boardnav',
  templateUrl: './boardnav.component.html',
  styleUrls: ['./boardnav.component.css']
})
export class BoardnavComponent implements OnInit {
  hasTitle = false;
  defaultValue = 'Focus for today';
  projectTitle = '' || this.defaultValue;
  constructor() { }

  ngOnInit() {
  }

  saveTitle(): void {
    if (this.projectTitle) {
      this.hasTitle = !this.hasTitle;
    }
  }
}
