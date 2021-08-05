import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../model-posts/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllPosts(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(this.url)
  }

  getPostsById(id: number): Observable<IPosts> {
    return this.httpClient.get<IPosts>(this.url + '/' + id)
  }
}
