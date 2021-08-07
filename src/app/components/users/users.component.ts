import { Component, OnInit } from '@angular/core';
import {IUser} from "../../model/user.interface";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user:IUser

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
    getId(id: number){
    this.userService.getById(id).subscribe(value => this.user = value)
    }

}
