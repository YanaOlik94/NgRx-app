import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import {StoreModule} from "@ngrx/store";
import { reducers } from "./store/reducer";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./store/effects";
import {PostsService} from "./services/posts.service";


@NgModule({
    declarations: [
        PostsComponent
    ],
    exports: [
        PostsComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('posts', reducers),
        EffectsModule.forFeature([PostEffects])
    ],
    providers: [PostsService]
})
export class PostsModule { }
