import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OrdersSearchService {
    // clientsByStore = [
    //   {name: 'izaque', totalValue: 2, orderDate: '21-02-2003'},
    //   {name: 'a', totalValue: 3, orderDate: '21-02-2003'}
    // ];
    
    // clientsByClient = [
    //   {name: 'ib', totalValue: 2, orderDate: '21-02-2003'},
    //   {name: 'c', totalValue: 3, orderDate: '21-02-2003'}
    // ];
  
    // readOrdersByStore(date: any) {
    //   return this.clientsByStore;
    // }
  
    // readOrdersByClient(date: any) {
    //   return this.clientsByClient;
    // }
    url = 'http://localhost:8080/encomenda' 

    constructor(private http: HttpClient) {
    
    }

    readOrdersByStore(storeID: any) {
      let params = new HttpParams()
      let orders = Array()
      params = params.set('IDLoja', parseFloat(storeID))
      return new Promise((resolve, reject) => {
        this.http.get(this.url + '/query1', { params: params }).subscribe((response: any) => {
          console.log('Resposta da API:', response)
          for(let i = 0; i < response.length; i++){
            orders.push(response[i]);
          }
          console.log(orders)
          resolve(orders)
        }, (error: any) => {
          console.error('Erro na requisição /order/query1', error)
          reject()
        })
      })
    }
  
    readOrdersByClient(nomeCliente: any) {
      let params = new HttpParams()
      let orders = Array()
      params = params.set('nomeCliente', nomeCliente)
      return new Promise((resolve, reject) => {
        this.http.get(this.url + '/query6', { params: params }).subscribe((response: any) => {
          console.log('Resposta da API:', response)
          for(let i = 0; i < response.length; i++){
            orders.push(response[i]);
          }
          resolve(orders)
        }, (error: any) => {
          console.error('Erro na requisição /order/query6', error)
          reject()
        })
      })
    }
  }