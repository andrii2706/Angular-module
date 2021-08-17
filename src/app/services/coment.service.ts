import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComents} from "../interfaces/IComents";

@Injectable({
  providedIn: 'root'
})
export class ComentService {
  url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(
    private httpClient:HttpClient
  ) { }
  getAllComents(): Observable<IComents[]>{
    return this.httpClient.get<IComents[]>(this.url)
}
}
