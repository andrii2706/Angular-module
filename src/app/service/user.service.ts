import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private httpCLient: HttpClient
  ) { }
getAll() :Observable<IUser[]>{
  return this.httpCLient.get<IUser[]>(this.url)
}
getById(id:number) :Observable<IUser>{
  return this.httpCLient.get<IUser>(this.url+ '/'+ id )
}
}
