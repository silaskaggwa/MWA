import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) { }

  getPost(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1')
      .pipe(map((post: Response) => post.json()));
  }
}
