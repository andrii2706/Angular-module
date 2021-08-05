import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserModule} from "./user-components/user/user.module";
import {RouterModule} from "@angular/router";
import {PostsModule} from "./posts-components/posts/posts.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', loadChildren: () => import('./user-components/user/user.module').then(m=>m.UserModule)},
      {path: 'posts', loadChildren: () => import('./posts-components/posts/posts.module').then(m=>m.PostsModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
