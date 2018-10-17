import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input value="{{counter}}" (keyup)=setCounter($event.target.value)/>
      <app-counter [counter] = "counter" (counterChange)=onCounter($event)></app-counter>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  counter: number = 4;

  onCounter($event){
    this.counter = $event;
  }

  setCounter($event){
    this.counter = $event;
  }
}
