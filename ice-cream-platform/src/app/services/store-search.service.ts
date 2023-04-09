export class StoreSearchService {
    funcionario = [
      {name: 'izaque', email: 'iza@usp.br', orderDate: '21-02-2003'},
      {name: 'a', email: 'iza@usp.br', orderDate: '21-02-2003'}
    ];
    
    fornecedor = [
      {name: 'ib', email: 'iza@usp.br', totalValue: 2},
      {name: 'c', email: 'iza@usp.br', totalValue: 3}
    ];
  
    readEmployees(storeName: any) {
      return this.funcionario;
    }
  
    readSuppliers(storeName: any) {
      return this.fornecedor;
    }
  }