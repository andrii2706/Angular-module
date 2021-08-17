import { Component, OnInit } from '@angular/core';
import {IComents} from "../../../interfaces/IComents";
import {ComentService} from "../../../services/coment.service";

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {
  page: number = 1
  comments: IComents[]

  constructor(
    private comentService:ComentService
  ) { }

  ngOnInit(): void {
    this.comentService.getAllComents().subscribe(value => this.comments = value)
  }

}
