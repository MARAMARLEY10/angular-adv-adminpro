import { Component } from '@angular/core';

@Component({
  selector: 'app-notpagesfound',
  templateUrl: './notpagesfound.component.html',
  styleUrls: [ './notpagesfound.component.css'
  ]
})
export class NotpagesfoundComponent {

  constructor() { }

  year =  new Date().getFullYear();

}
