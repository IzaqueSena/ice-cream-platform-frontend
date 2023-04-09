export class OrdersSearchService {
    clientsByStore = [
      {name: 'izaque', email: 'iza@usp.br', orderDate: '21-02-2003'},
      {name: 'a', email: 'iza@usp.br', orderDate: '21-02-2003'}
    ];
    
    clientsByClient = [
      {name: 'ib', email: 'iza@usp.br', totalValue: 2},
      {name: 'c', email: 'iza@usp.br', totalValue: 3}
    ];
  
    readOrdersByStore(date: any) {
      return this.clientsByStore;
    }
  
    readOrdersByClient(date: any) {
      return this.clientsByClient;
    }
  }