import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css', '../../assets/styles/nicepage.css']
})
export class ClientsComponent {

  constructor(private router: Router) {
    
  }

  submitDate(forms: any) {
    console.log(forms)
    let date = forms.date
    console.log(date)
    this.router.navigate(['clients-search/clients-listing'],{queryParams: {searchType: 'date', searchValue: date}}).then(() => {window.location.reload();});
  }

  submitValue(forms: any) {
    console.log(forms)
    let value = forms.value
    console.log(value)
    this.router.navigate(['clients-search/clients-listing'],{queryParams: {searchType: 'value', searchValue: value}}).then(() => {window.location.reload();});
  }

  log(x: any) {
    console.log(x)
  } 
}
