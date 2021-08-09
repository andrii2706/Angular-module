import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/for.users/users/users.component';
import { UserComponent } from './components/for.users/user/user.component';
import {UserService} from "./services/user.service";
import { PostComponent } from './components/for.posts/post/post.component';
import { PostsComponent } from './components/for.posts/posts/posts.component';
import { ComentComponent } from './components/for.comentars/coment/coment.component';
import { ComentsComponent } from './components/for.comentars/coments/coments.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

let routes: Routes =[
  {path:'users', component: UsersComponent},
  {path:'posts', component: PostsComponent},
  {path:'coments', component: ComentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    PostsComponent,
    ComentComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
