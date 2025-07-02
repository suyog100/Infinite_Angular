import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
  onSubmit(form: any) {
    console.log(form, "form")
  }
}
