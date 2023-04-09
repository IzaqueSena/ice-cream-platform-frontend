export class OrdersSearchService {
    clientsByStore = [
      {name: 'izaque', totalValue: 2, orderDate: '21-02-2003'},
      {name: 'a', totalValue: 3, orderDate: '21-02-2003'}
    ];
    
    clientsByClient = [
      {name: 'ib', totalValue: 2, orderDate: '21-02-2003'},
      {name: 'c', totalValue: 3, orderDate: '21-02-2003'}
    ];
  
    readOrdersByStore(date: any) {
      return this.clientsByStore;
    }
  
    readOrdersByClient(date: any) {
      return this.clientsByClient;
    }
  }