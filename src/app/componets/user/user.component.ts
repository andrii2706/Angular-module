import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../model/IUser";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUser

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
