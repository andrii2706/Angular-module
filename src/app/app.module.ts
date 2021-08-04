import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
