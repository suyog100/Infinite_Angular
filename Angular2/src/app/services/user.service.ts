import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IUser {
  login: string,
  avatar_url: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendUrl = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getUser() {
    // fetch the users
    let users: Observable<IUser[]> = this.http.get<IUser[]>(this.backendUrl + '/users')
    return users
  }
}
