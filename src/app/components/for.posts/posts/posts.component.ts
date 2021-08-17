import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/post.service";
import {IPost} from "../../../interfaces/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  page: number = 1
  posts: IPost[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value)
  }

}
