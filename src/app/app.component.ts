import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Tweekboard';
  hasTitle = false;
  defaultValue = 'Focus for today';
  projectTitle = '' || this.defaultValue;

  saveTitle(): void {
    if (this.projectTitle) {
      this.hasTitle = !this.hasTitle;
    }
  }
}
