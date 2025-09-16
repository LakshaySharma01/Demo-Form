import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm = new FormGroup({
    emailAddress: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required),
  })
public LoginFormSubmit(){
  console.log(this.LoginForm.value)
}
}
