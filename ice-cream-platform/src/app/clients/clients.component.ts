import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css', '../../assets/styles/nicepage.css']
})
export class ClientsComponent {
  submitDate(forms: any) {
    console.log(forms)
    let date = forms.date
    console.log(date)
  }

  submitValue(forms: any) {
    console.log(forms)
    let value = forms.value
    console.log(value)
  }

  log(x: any) {
    console.log(x)
  } 
}
