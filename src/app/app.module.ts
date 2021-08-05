import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserModule} from "./user-components/user/user.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot([
      {path: 'users', loadChildren: () => import('./user-components/user/user.module').then(m=>m.UserModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
