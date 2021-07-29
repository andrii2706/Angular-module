import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../model/Iposts";

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {
private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(
    private httpClient: HttpClient
  ) { }
getPosts(): Observable<IPost[]>{
  return this.httpClient.get<IPost[]>(this.url)
}
}
