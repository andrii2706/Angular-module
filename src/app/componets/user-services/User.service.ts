import {Injectable} from "@angular/core";
import {root} from "rxjs/internal-compatibility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../Model/users-model/IUser.Modal";

@Injectable({
  providedIn:root
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'
constructor(private httpClient: HttpClient) {
}
getAllUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
}
getUsersById(id:number): Observable<IUser>{
    return this.httpClient.get<IUser>(this.url+'/'+id)
}
}
