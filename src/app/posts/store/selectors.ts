import {AppStateInterface} from "../../shared/types/app.state.interface";
import {createSelector} from "@ngrx/store";
import {PostStateInterface} from "../types/post-state.interface";

export const selectFeature = (state: AppStateInterface) => state.posts

export const isLoadingSelector = createSelector(
  selectFeature,
  (state: PostStateInterface) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state: PostStateInterface) => state.posts
);

export const errorSelector = createSelector(
  selectFeature,
  (state: PostStateInterface) => state.error
);
