import {Routes} from "@angular/router";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {PostGuardService} from "../servises/post-guard/post-guard";

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canDeactivate: [PostGuardService],
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
    canActivate: [PostGuardService],
    canDeactivate: [PostGuardService]
  },
  {
    path: 'posts',
    redirectTo: '',
    pathMatch: 'full'
  }
]
