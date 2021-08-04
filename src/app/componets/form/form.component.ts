import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
id = 0

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  showUsers():void {
    this.userService.getUsersById(this.id).subscribe(value => console.log(value))
  }

}
