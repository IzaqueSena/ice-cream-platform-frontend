import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css',  '../../../assets/styles/nicepage.css']
})
export class EmployeeComponent {

  constructor(private router: Router) {
    
  }

  submitEmployer(forms: any) {
    console.log(forms)
    let employer = forms.text
    console.log(employer)
    this.router.navigate(['clients-search/clients-listing'],{queryParams: {searchType: 'employer', searchValue: employer}}).then(() => {window.location.reload();});
  }

  log(x: any) {
    console.log(x)
  } 

}