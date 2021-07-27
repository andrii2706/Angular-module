import { Injectable } from '@angular/core';
import {root} from "rxjs/internal-compatibility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../../Model/IPosts-model";

@Injectable({
  providedIn: root
})
export class PostService {
    private urlPosts =  'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient:HttpClient) { }
getAllPosts(): Observable<IPosts[]>{
      return this.httpClient.get<IPosts[]>(this.urlPosts)
}
getPostsById(id:number) : Observable<IPosts>{
      return this.httpClient.get<IPosts>(this.urlPosts + '/'+ id)
}

}
