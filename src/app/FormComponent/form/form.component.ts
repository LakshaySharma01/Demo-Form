import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], 
  imports:[ReactiveFormsModule , NgClass]
})
export class FormComponent { 
  registrationForm = new FormGroup({
    fullName: new FormControl('',Validators.required),
    emailAddress: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required),
    confirmPass: new FormControl('',Validators.required),
    Address1: new FormControl('',Validators.required),
    Address2:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),
  })

  public registrationFormSubmit(){
    console.log(this.registrationForm.value)
  }
}
