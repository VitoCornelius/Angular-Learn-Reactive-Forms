import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  projectForm : FormGroup;
  statuses : String[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name' : new FormControl("please input name", [Validators.required, this.syncValidator]),
      'mail' : new FormControl("rafal@test.pl", [Validators.email, Validators.required], this.asyncValidator),
      'status' : new FormControl(this.statuses[0])
    })
  }

  submitForm() {
    console.log(this.projectForm);
    //this.projectForm.reset();
  }

  syncValidator(control : FormControl) : {[s:string]:boolean} {
    if (control.value === 'Test'){
      return {'nameForbidden' : true}
    }
    return null;
  }

  asyncValidator(control : FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.pl'){
          resolve({'emailForbidden' : true})
        } else {
          resolve(null);
        }
      } ,1500)
    })
    return promise;
  }

}
