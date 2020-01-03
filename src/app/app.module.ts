import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//recative forms module is required !
//Forms module is required to work with the template driven froms 


import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //TODO add this 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
