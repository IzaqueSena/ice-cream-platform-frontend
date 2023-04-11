import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css', '../../../assets/styles/nicepage.css']
})
export class StoreComponent {
  @ViewChild('fstore', {static: false}) fstore: NgForm | undefined;
  storeName: any;

  constructor(private router: Router) {
    
  }

  submitDivEmployees() {
    this.storeName = this.fstore?.form.value.storeName
    console.log("employees " + this.storeName)
    this.router.navigate(['stores-search/stores-elements'],{queryParams: {searchType: 'employees', storeName: this.storeName}})
  }

  submitDivSuppliers() {
    this.storeName = this.fstore?.form.value.storeName
    console.log("suppliers " + this.storeName)
    this.router.navigate(['stores-search/stores-elements'],{queryParams: {searchType: 'suppliers', storeName: this.storeName}})

  }

}
