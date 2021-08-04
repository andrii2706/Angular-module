import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../model/IUser";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
form:FormGroup
  userInfo: IUser
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  this.form = new FormGroup({
    id : new FormControl(''),
    name: new FormControl(''),
    username : new FormControl(''),
    email : new FormControl('')
  })
  }

  onSubmit() {
this.userService.saveUsers(this.form.getRawValue()).subscribe()
  }
}
