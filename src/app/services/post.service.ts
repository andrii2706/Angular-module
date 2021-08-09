import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(
    private httpCLient: HttpClient
  ) { }
getAllPosts(): Observable<IPost[]>{
  return this.httpCLient.get<IPost[]>(this.url)
}
}
