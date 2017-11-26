import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Exolever Demo';
  icon = 'perm_contact_calendar';
  color = 'primary';

  constructor() { }

}
