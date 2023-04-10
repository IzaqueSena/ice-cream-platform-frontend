import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../../../assets/styles/nicepage.css']
})
export class OrdersComponent {

  constructor(private router: Router) {
    
  }

  submitStore(forms: any) {
    console.log(forms)
    let store = forms.text
    console.log(store)
    this.router.navigate(['orders-search/orders-listing'],{queryParams: {searchType: 'store', searchValue: store}})
  }

  submitClient(forms: any) {
    console.log(forms)
    let client = forms.text
    console.log(client)
    this.router.navigate(['orders-search/orders-listing'],{queryParams: {searchType: 'client', searchValue: client}})
  }

  log(x: any) {
    console.log(x)
  } 
}
