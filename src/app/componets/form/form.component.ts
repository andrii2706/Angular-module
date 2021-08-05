import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {UserService} from "../../service/user.service";
import {IUser} from "../../model/IUser";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
id = 0
  @Output()
  data = new EventEmitter<IUser>()
  @Input()
  user:IUser

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  showUsers():void {
    this.userService.getUsersById(this.id).subscribe(value => console.log(value))
  }


  showUser() {
  this.userService.getUsersById(this.id).subscribe(value => {
    this.data.emit(value)
  })
  }
}
