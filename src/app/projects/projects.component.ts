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

}
