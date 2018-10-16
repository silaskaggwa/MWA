import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  private counterValue;
  constructor() { 
    this.counterValue = 0;
  }

  increase(){
    this.counterValue++;
  }

  decrease(){
    this.counterValue--;
  }

  ngOnInit() {
  }

}
