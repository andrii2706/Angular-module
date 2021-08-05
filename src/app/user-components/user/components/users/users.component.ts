import { Component, OnInit } from '@angular/core';
import {IUSer} from "../../../model/IUSer";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUSer[]
  selected: IUSer
  constructor(
    private userService: UserService,
    // private activatedRouter : ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.userService.getAll().subscribe(value => this.users = value)
  }

  catchInfo($event: IUSer) {
  this.selected = $event
  }
}
