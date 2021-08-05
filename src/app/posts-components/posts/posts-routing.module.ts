import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "../posts-info/posts/posts.component";
import {PostsDetailsComponent} from "../posts-info/posts-details/posts-details.component";

const routesForPosts: Routes = [
  {
    path: '', component: PostsComponent,
    children:[{
      path: ':id', component: PostsDetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesForPosts)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
