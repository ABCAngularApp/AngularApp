import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {

  secondTab: boolean = false;
  currentUser;
  employee = this._employee.getEmployee();
  employeeProjects = this.employee[0].projets;
  currentEmployee = this.employee[0];
  createUser: boolean = false;
  updateUser: boolean = false;
  firstTab:boolean = true;
  Row;
  counter:number = 0;


  constructor(private _employee: EmployeeService) { }

  ngOnInit() {
  }

  saveEmployee(form: NgForm) {
    let length = this.employee.length;
    this.currentUser = form;
    if(this.currentUser.id==''){
      alert('ID can not be empty');
      return false;
    }
    for (let i = 0; i < length; i++) {
      if (this.employee[i].id == this.currentUser.id) {
        alert('Employee with this ID already exsists. Please enter another ID');
        return false;
      }
    }
    this.currentUser.isSelected = true;
    this.currentEmployee = this.currentUser;
    this.employee.push(this.currentUser);
    this.createUser = false;
    console.log(this.currentUser);
    alert("ID: " + this.currentUser.id + " First Name: " + this.currentUser.firstName + " Last Name: " + this.currentUser.lastName
      + " Title: " + this.currentUser.title + " Date of birth: " + this.currentUser.dateOfBirth);
  }

  projectsTab() {
    this.firstTab = false;
    this.secondTab = true;
  }

  basicInfoTab() {
    this.secondTab = false;
    this.firstTab = true;
  }

  checkCurrentEmployee(val,tr) {
    if(this.counter>0){
    this.Row.style.backgroundColor = 'white';      
    }
    let length = this.employee.length;
    for (let i = 0; i < length; i++) {
      this.employee[i].isSelected = false;
      if (this.employee[i].id == val.innerHTML) {
        this.employee[i].isSelected = true;
        this.currentEmployee = this.employee[i];
      }
    }
    tr.style.backgroundColor = '#b7d67e';
    this.Row = tr;
    this.counter++;
  }

  create() {
    this.createUser = true;
  }

  update() {
    this.updateUser = true;
  }

  finish() {
    this.updateUser = false;
  }

}
