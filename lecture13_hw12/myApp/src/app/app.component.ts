import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>{{title}}</h1>
    <app-mycomponent [myStrings]="stringArr"></app-mycomponent>
    <p appMynewcolor [newColor]="color" (colorEvent)="regColorChange($event)">This displays new color after click</p>
    <div appMyvisibility [showMe]="showIt">An element changed it's color to {{newColor}}</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  stringArr: string[] = ["silas","norah","ezra"];
  color = 'red';
  showIt: boolean = false;
  newColor: string;

  regColorChange(newColor){
    this.newColor = newColor;
    this.showIt = true;
  }
}
