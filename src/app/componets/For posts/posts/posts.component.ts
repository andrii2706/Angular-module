import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../../Model/IPosts-model";
import {PostService} from "../../posts-services/post.services.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPosts[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  this.postService.getAllPosts().subscribe(value => this.posts = value );
  }

}
