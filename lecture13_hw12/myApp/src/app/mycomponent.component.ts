import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template: `
    <ul>
      <li *ngFor="let str of myStrings">{{str}}</li>
    </ul>
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {

  @Input() myStrings : string[];
  
  constructor() {}

  ngOnInit() {
  }

}
