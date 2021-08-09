import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../interfaces/IUser";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 users: IUser[]
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  this.userService.getAll().subscribe(value => this.users = value)
 }

}
