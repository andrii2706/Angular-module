import { Component, OnInit } from '@angular/core';
import {PostService} from "../../posts-service/post.service";
import {IPosts} from "../../model-posts/IPosts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPosts[]
  selected: IPosts
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value)
  }
  catchInfo($event: IPosts){
    this.selected = $event
  }
}
