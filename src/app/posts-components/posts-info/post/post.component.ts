import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPosts} from "../../model-posts/IPosts";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPosts
  @Output()
  data: EventEmitter<IPosts> = new  EventEmitter<IPosts>()

  constructor(
    private router:Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  postInfo(){
    this.data.emit(this.post)
    this.router.navigate([this.post.id],{relativeTo: this.activatedRouter})
  }

}
