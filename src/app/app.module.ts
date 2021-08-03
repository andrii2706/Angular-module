import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { CarComponent } from './one-car/car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CarInfoComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
