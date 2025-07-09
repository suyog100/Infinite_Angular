import { Component } from '@angular/core';
import { IUser, UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [RouterLink, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: IUser[] = []

  searchText = '';

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

  get filteredUsers(): IUser[] {
    if (!this.searchText.trim()) return this.users;
    return this.users.filter((user) =>
      user.login.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}