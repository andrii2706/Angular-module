import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user-services/User.service";
import {IUser} from "../../../Model/users-model/IUser.Modal";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUser[]

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value=> this.users= value);
  }
}
