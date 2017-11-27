import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Exolever Demo';
  icon = 'all_inclusive';
  color = 'primary';

  constructor() { }

}
