import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUSer} from "../../../model/IUSer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUSer

  @Output()
  data: EventEmitter<IUSer> = new  EventEmitter<IUSer>()

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  userInfo(){
    this.data.emit(this.user)
    this.router.navigate([this.user.id],{relativeTo:this.activatedRouter})
  }
}
