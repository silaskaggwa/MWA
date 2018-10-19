import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mypost',
  template: `
    <p>
      {{data.title}}
    </p>
  `,
  styles: []
})
export class MypostComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
