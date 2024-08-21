import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { response } from 'express';
import { UserMethodsService } from '../user-methods.service';
import { stringify } from 'querystring';

declare var $: any;
@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrl: './table-comp.component.css'
})
export class TableCompComponent implements OnInit{
  data: any[] = [];
  myArray:any  = [
    {
      id: '',
      first_Name: '',
      last_Name: '',
      email: ''
    }
  ];

  newData= {
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  };

  constructor(public userMethod: UserMethodsService){}

  ngOnInit(): void {
    this.userMethod.getUser();

    
    $("#btnAjax").click(() =>{
      $.ajax({
        url: 'http://localhost:5224/api/User/GetUser/',
        method: 'GET'
      }).done((response: any) => {
        this.data = response; 
        console.log(this.data);
      }).fail((error: any) => {
        console.error('Error fetching data:', error);
      });
    }) 
  }

  onDelete(row: string): void {
    this.userMethod.deleteUser(row);
  }

  setNewData():void{
    this.userMethod.setNewData(this.newData);
  }

  onEdit(row: any): void {
    this.setNewData();
    alert(row);
    this.userMethod.editUser(row);
    
  }

}
