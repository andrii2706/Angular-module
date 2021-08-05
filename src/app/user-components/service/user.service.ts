import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUSer} from "../model/IUSer";

@Injectable({
  providedIn: 'root'
})
export class UserService {

url = 'https://jsonplaceholder.typicode.com/users'

  constructor(
    private httpCLient: HttpClient
  ) { }
  getAll() :Observable<IUSer[]>{
    return this.httpCLient.get<IUSer[]>(this.url)
  }
  getById(id: number): Observable<IUSer>{
  return this.httpCLient.get<IUSer>(this.url +'/'+id)
  }
}
