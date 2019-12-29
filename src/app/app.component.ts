import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'username' : new FormControl(null, Validators.required),  //we can set the default value, validators, async validators  
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
