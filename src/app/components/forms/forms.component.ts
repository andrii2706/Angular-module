import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../model/user.interface";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
form: FormGroup
  users: IUser[];
@Output()
event = new EventEmitter<number>()
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  this.form = new FormGroup({
    userId: new FormControl('')
  })
    this.userService.getAll().subscribe(value => this.users = value)
    this.event.emit(this.form.controls.userId.value)
  }
  getUsersId(): void{
  this.event.emit(this.form.controls.userId.value )
  }
}
