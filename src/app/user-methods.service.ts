import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tableModel } from './table.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserMethodsService {
  myVariable={
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  }

  newData = {
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  };

  tableModelObj: tableModel = new tableModel();
  tableData !: any;

  constructor(private userService: ApiService){}

  setMyVariable(value: any): void {
    this.myVariable.firstName = value.firstName;
    this.myVariable.lastName = value.lastName;
    this.myVariable.position = value.position;
    this.myVariable.email = value.email;
  }

  setNewData(value: any):void{
    this.newData.firstName = value.firstName;
    this.newData.lastName = value.lastName;
    this.newData.email = value.email;
    this.newData.position = value.position;
  }

  addUser(){
    this.userService.addUser(this.myVariable).subscribe((response) => {
      alert(`${response.firstName} added successfully.`);
      this.getUser();
    })
    
  }

  getUser() {
    this.userService.getUser().subscribe(response => {
      console.log('User data:', response);
      this.tableData = response;
    });
  }

  editUser(id:number) {
    
    this.userService.editUser(id, this.newData).subscribe(
      updatedUser => {
        console.log('User updated successfully:', updatedUser);
        // You can perform any additional actions here
      },
      error => {
        console.error('Failed to update user:', error);
        // Handle error appropriately
      }
    );
  }

  deleteUser(row: string): void {
    this.userService.deleteUser(row).subscribe(response => {
      this.tableData = this.tableData.filter((user: any) => user.id !== row);
      this.getUser();
    })
  }

}
