import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StoreSearchService {
    funcionario = [
      {name: 'izaque', cpf: '123'},
      {name: 'a', cpf: '345'}
    ];
    
    fornecedor = [
      {name: 'ib', address: 'rua'},
      {name: 'c', address: 'avenida'}
    ];
  
    readEmployees(storeName: any) {
      return this.funcionario;
    }
  
    readSuppliers(storeName: any) {
      return this.fornecedor;
    }
  }