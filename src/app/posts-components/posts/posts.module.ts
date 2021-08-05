import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "../posts-info/posts/posts.component";
import {PostComponent} from "../posts-info/post/post.component";
import {PostsDetailsComponent} from "../posts-info/posts-details/posts-details.component";
import {PostService} from "../posts-service/post.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[PostService]
})
export class PostsModule { }
