import { EmployeePerformanceService } from './../../services/employee-performance.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css',  '../../../assets/styles/nicepage.css']
})
export class EmployeeComponent {
  employeePerformance: any
  service: EmployeePerformanceService
  show: boolean

  constructor(private router: Router, private searchSerive: EmployeePerformanceService ) {
    this.service = searchSerive
    this.show = false
  }

  submitEmployer(forms: any) {
    console.log(forms)
    this.getData(forms.employeeName)
  }

  async getData(employeeName: any) {
    this.employeePerformance = await this.service.readEmployeePerformanceService(employeeName)
    this.show = true
  }

}