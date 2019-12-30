import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders : String[] = ['male', 'female'];
  signupForm : FormGroup;

  forbiddenUsernames : String[] = ['Chris', 'Anna'];
  

  ngOnInit() {
    //should initialize before rendering
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), //have to bind to THIS class 
        //we can set the default value, validators, async validators  
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

  // {nameIsForbidden : true} -> this returns something like this 
  forbiddenNames(control : FormControl) : {[s: string]:boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true};
    }
    return null; // IF THE VALIDATION IS SUCCESSFUL, YOU SHOULD PASS NULL !!!!!!!!!!!
  } 

}
