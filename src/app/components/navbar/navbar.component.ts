import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
  @Input() appName: string;
}

