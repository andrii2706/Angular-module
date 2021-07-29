import { Component, OnInit } from '@angular/core';
import {IPost} from "../../model/Iposts";
import {PostServicesService} from "../../servises/post/post.services.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPost[]

  constructor( private postService:PostServicesService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

}
