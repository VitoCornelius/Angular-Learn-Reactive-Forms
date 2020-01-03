import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'name' : new FormControl("please input name", [Validators.required]),
      'mail' : new FormControl("rafal@test.pl", [Validators.email, Validators.required]),
      'status' : new FormControl(this.statuses[0])
    })
  }

  submitForm() {
    console.log(this.projectForm)
  }

  syncValidator(){

  }

  asyncValidator(){
    
  }

}
