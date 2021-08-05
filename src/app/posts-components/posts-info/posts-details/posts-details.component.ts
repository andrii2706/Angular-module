import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../model-posts/IPosts";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../posts-service/post.service";

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {

  post: IPosts

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.postService.getPostsById(id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {
  }

}
