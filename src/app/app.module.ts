import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from './componets/For posts/post/post.component';
import {PostsComponent} from './componets/For posts/posts/posts.component';
import {RouterModule, Route} from "@angular/router";
import {UserComponent} from './componets/For Users/user/user.component';
import {UsersComponent} from './componets/For Users/users/users.component';
import {UserDetailsComponent} from './componets/For Users/user-details/user-details.component';
import {UserService} from './componets/user-services/User.service';
import {PostsDetailComponent } from './componets/For posts/posts-detail/posts-detail.component'
import {PostService} from "./componets/posts-services/post.services.service";
//шлях до  юзерів та постів
const routes:Route[] = [
  {path: 'posts', component: PostsComponent, children:[
      {path: ':id', component:PostsDetailComponent}
    ]},
  {path: 'users', component: UsersComponent, children:[
      {path: ':id', component: UserDetailsComponent},
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    PostsDetailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
