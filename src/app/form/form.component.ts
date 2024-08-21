import { Component, Output, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';
import { UserMethodsService } from '../user-methods.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myvalue={
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  }

  @ViewChild('userForm') userForm!: NgForm;

  constructor(private userMethods: UserMethodsService){}

  setValueInService(): void {
    this.userMethods.setMyVariable(this.myvalue);
  }

  onSubmit(){
    this.setValueInService();
    this.userMethods.addUser();
  }
  
}
