import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../Model/users-model/IUser.Modal";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user-services/User.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.userService.getUsersById(id).subscribe(value => this.user = value)
    });
  }
  ngOnInit(): void {
  }

}
