import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', '../../assets/styles/nicepage.css']
})
export class HomepageComponent {
  constructor(private router: Router) {
    
  }

  goToClients() {
    this.router.navigateByUrl("/clients-search")
  }

  goToOrders() {
    this.router.navigateByUrl("/orders-search")
  }

  goToSuppliers() {
    this.router.navigateByUrl("/suppliers-search")
  }

  goToProducts() {
    this.router.navigateByUrl("/products-search")
  }

  goToEmployees() {
    this.router.navigateByUrl("/employees-search")
  }

  goToStores() {
    this.router.navigateByUrl("/stores-search")
  }
}
