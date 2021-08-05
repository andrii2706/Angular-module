import { Component, OnInit } from '@angular/core';
import {IUSer} from "../../../model/IUSer";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:IUSer

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(value => this.user = value)
    })
  }

  ngOnInit(): void {
  }

}
