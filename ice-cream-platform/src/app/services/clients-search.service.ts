export class ClientsSearchService {
  clientsByDate = [
    {name: 'izaque', email: 'iza@usp.br', orderDate: '21-02-2003'},
    {name: 'a', email: 'iza@usp.br', orderDate: '21-02-2003'}
  ];
  
  clientsByValue = [
    {name: 'ib', email: 'iza@usp.br', totalValue: 2},
    {name: 'c', email: 'iza@usp.br', totalValue: 3}
  ];

  readClientsByDate(date: any) {
    return this.clientsByDate;
  }

  readClientsByValue(date: any) {
    return this.clientsByValue;
  }
}