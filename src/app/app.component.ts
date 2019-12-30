import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm : FormGroup;

  ngOnInit() {
    //should initialize before rendering
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, Validators.required),  //we can set the default value, validators, async validators  
        'email' : new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

}
