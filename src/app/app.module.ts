import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { FormsComponent } from './components/forms/forms.component';
import {UserService} from "./service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
