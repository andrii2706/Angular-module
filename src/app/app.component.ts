import {Component} from '@angular/core';
import {IUser} from "./model/IUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HI MAN LETS GET START HARD WORK';
  info = 'делаем форму template driven form с select в котором' +
    ' будут все имена юзеров с jsonPlaceHolder при выборе определенного юзера ' +
    'и нажитии кнопки происходит  submit выводится подробная инфа про юзераСледом' +
    ' все то же самое, только через reactive form'
  user: IUser;

  getUser(user: IUser) {
    this.user = user
  }
}
