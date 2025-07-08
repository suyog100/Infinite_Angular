import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {

    usernameFromts = ""
    imageFromts = ""



  onSubmit(form: any) {
    console.log(form, "form")
  }


  userForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    image: new FormControl(""),
  })

  submitForm() {
    console.log(this.userForm, "submit")
  }
}
