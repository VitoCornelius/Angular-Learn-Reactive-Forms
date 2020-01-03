import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailsAsync),
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });

    this.signupForm.valueChanges.subscribe( //track the change of the value (or individual control)
      (value)=> {console.log(value);}
    );

    this.signupForm.statusChanges.subscribe( //track the change of the status (or individual control)
      (value)=> {console.log(value);}
    );

    this.signupForm.setValue({
      'userData' : {
        'username' : 'Rafal',
        'email' : 'ddd@com'
      }, 'gender' : 'female',
      'hobbies' : []
    })

    this.signupForm.patchValue({
      'userData' : {
        'username' : 'Anna',
        'email' : 'ddasasd@com'
      }
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
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

  forbiddenEmailsAsync(control : FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout( () => { 
        if(control.value === 'test@test.pl') {
          resolve({'emailIsForbidden' : true});
        } else {
          resolve(null);
        }
      } , 1500);
    });
    return promise;
  }

}
