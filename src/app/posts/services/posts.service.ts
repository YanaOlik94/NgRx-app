import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {PostInterface} from "../types/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<PostInterface[]> {
    const posts: PostInterface[] = [
      {id: '1', title: 'Angular', autor: 'Eddie M.', date: '13/01/2024', content: 'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.'},
      {id: '2', title: 'RxJS', autor: 'Jack Austen', date: '11/12/2023', content: 'RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.'},
      {id: '3', title: 'Typescript', autor: 'Ann Smith', date: '06/02/2024', content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'},
      {id: '4', title: 'HTML', autor: 'Joe Golt', date: '27/11/2023', content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'},
      {id: '5', title: 'NgRx', autor: 'Ben Alpek', date: '18/01/2024', content: 'NgRx is a framework for building reactive applications in Angular. NgRx provides libraries for:'}
    ]

    return of(posts).pipe(delay(2000))
  }
}
