import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/models';

const _API_HOSTNAME = 'http://localhost:5000/'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User = {
    name: "admin_pandey",
    role: "Admin",
    user_id: 939,
    username: "admin"
  };



  constructor(private readonly _http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return; //this._http.post<User>(_API_HOSTNAME + 'user/login', { username: username, password: password })
    //   .pipe(tap((user: User) => {
    //     this.currentUser = user;
    //   }));
  }
}
