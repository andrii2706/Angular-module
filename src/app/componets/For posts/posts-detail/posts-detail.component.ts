import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../../Model/IPosts-model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../posts-services/post.services.service";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {

 post:IPosts

  constructor(private activateRoute:ActivatedRoute,private postService:PostService) {
   this.activateRoute.params.subscribe(({id})=>{
     this.postService.getPostsById(id).subscribe(value => this.post = value)
   });
  }

  ngOnInit(): void {
  }

}
