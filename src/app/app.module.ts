import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './componets/For posts/post/post.component';
import { PostsComponent } from './componets/For posts/posts/posts.component';
import {RouterModule} from "@angular/router";
import { UserComponent } from './componets/For Users/user/user.component';
import { UsersComponent } from './componets/For Users/users/users.component';
import { UserDetailsComponent } from './componets/For Users/user-details/user-details.component';
//шлях до  юзерів та постів
const routes =[
  {path:'posts',component:PostComponent},
  {path:'users',component:UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
