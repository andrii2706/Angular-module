import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private httpClient:HttpClient
  ) { }
  getAll(): Observable<IUser[]>{
  return this.httpClient.get<IUser[]>(this.url)
  }
}
