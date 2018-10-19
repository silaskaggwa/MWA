import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <input [(ngModel)]="term">
    <div *ngFor="let post of posts">
      <mypost *ngIf="post.title.includes(term)" [data]="post"></mypost>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private term: string = '';
  constructor(private dataService: DataService){
    this.dataService.getPost().subscribe(
      data => this.posts = data,
      error => console.log(error.message)
    )
  }
  title = 'FinalReview';
  posts: any = [];
}
