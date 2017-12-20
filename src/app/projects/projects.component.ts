import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [EmployeeService],
})
export class ProjectsComponent implements OnInit {

  constructor(private _projects: EmployeeService) { }

  ngOnInit() {
  }

  projects = this._projects.getProject();
  currentProject = this.projects[0];
  showDetails:boolean = false;
  hideDetails:boolean = false;


  checkCurrentProject(val) {
    let length = this.projects.length;
    for (let i = 0; i < length; i++) {
      this.projects[i].isSelected = false;
      if (this.projects[i].id == val.innerHTML) {
        this.projects[i].isSelected = true;
        this.currentProject = this.projects[i];
      }
    }
    //tr.style.backgroundColor='yellow';
  }

  projectDetails(){
    this.showDetails = true;
    this.hideDetails = true;
  }

  hideProject(){
    this.hideDetails = false;
    this.showDetails = false;
  }

}
