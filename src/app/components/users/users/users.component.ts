import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../model/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUser[]
  constructor() { }

  ngOnInit(): void {
  }

}
