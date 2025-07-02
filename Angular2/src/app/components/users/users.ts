import { Component } from '@angular/core';
import { IUser, UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
users: IUser[] = []

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.users = data
      },  
      error: (error) => {
        console.log(error, "error occured")
      }
    })
  }
}
