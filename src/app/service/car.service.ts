import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../model/ICar";

@Injectable({
  providedIn: 'root'
})
export class CarService {
 carUrl ='http://92.253.237.122/api/v1/cars'
  constructor(
    private httpClient:HttpClient
  ) { }

  getCars() :Observable<ICar[]>{
  return  this.httpClient.get<ICar[]>(this.carUrl)
  }
  save(car:ICar): Observable<ICar>{
   return this.httpClient.post<ICar>(this.carUrl,car)
  }
}
