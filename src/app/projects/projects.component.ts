import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [EmployeeService],
})
export class ProjectsComponent implements OnInit {

  constructor(private _projects: EmployeeService) { 
    this.checkStatus();
  }

  ngOnInit() {
  }

  projects = this._projects.getProject();
  currentProject = this.projects[0];
  showDetails:boolean = false;
  hideDetails:boolean = false;
  counter:number = 0;
  Row;


  checkCurrentProject(val,tr) {
    if(this.counter>0){
      this.Row.style.backgroundColor = 'white';      
      }
    let length = this.projects.length;
    for (let i = 0; i < length; i++) {
      this.projects[i].isSelected = false;
      if (this.projects[i].id == val.innerHTML) {
        this.projects[i].isSelected = true;
        this.currentProject = this.projects[i];
      }
    }
    tr.style.backgroundColor = 'green';
    this.Row = tr;
    this.counter++;
  }

  projectDetails(){
    this.showDetails = true;
    this.hideDetails = true;
  }

  hideProject(){
    this.hideDetails = false;
    this.showDetails = false;
  }

  checkStatus(){
    let length = this.projects.length;
    var currentDate = new Date();
    for (let i = 0; i < length; i++) {
      let a = new Date(this.projects[i].endDate);
      if(a<currentDate){
        this.projects[i].status = "NOT_ACTIVE"
      }
    }
  }



}
