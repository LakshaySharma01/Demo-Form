import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], 
  imports:[ReactiveFormsModule]
})
export class FormComponent { 
  registrationForm = new FormGroup({
    fullName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
  })

  public registrationFormSubmit(){
    console.log(this.registrationForm.value)
  }
}
