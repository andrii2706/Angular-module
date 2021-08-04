import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../model/IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) { }
getUsers() :Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
}
saveUsers(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(this.url)
}
}
