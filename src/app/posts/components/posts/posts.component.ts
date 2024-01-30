import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";

import * as PostsActions from '../../store/actions'
import {Observable} from "rxjs";
import {AppStateInterface} from "../../../shared/types/app.state.interface";
import {errorSelector, isLoadingSelector, postsSelector} from "../../store/selectors";
import {PostInterface} from "../../types/post.interface";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  posts$!: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }
}
