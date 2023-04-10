import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SuppliersSearchService {
    Suppliers = [
      {name: 'izaque', address: 'iza'},
      {name: 'a', address: 'usp'}
    ];
  
    readSuppliers() {
      return this.Suppliers;
    }

  }