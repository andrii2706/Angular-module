import {Component, Input, OnInit} from '@angular/core';
import {IComents} from "../../../interfaces/IComents";

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.scss']
})
export class ComentComponent implements OnInit {

  @Input()
  coment: IComents
  constructor() { }

  ngOnInit(): void {
  }

}
