import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClientsSearchService {
  url = 'http://localhost:8080/cliente' 

  constructor(private http: HttpClient) {
    
  }

  readClientsByDate(date: any) {
    let params = new HttpParams()
    let clients = Array()
    params = params.set('dataLimite', date)
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/query7', { params: params }).subscribe((response: any) => {
        console.log('Resposta da API:', response)
        for(let i = 0; i < response.length; i++){
          clients.push(response[i]);
        }
        resolve(clients)
      }, (error: any) => {
        console.error('Erro na requisição /cliente/query7', error)
        reject()
      })
    })
  }

  readClientsByValue(value: any) {
    let params = new HttpParams()
    let clients = Array()
    params = params.set('valor', value)
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/query8', { params: params }).subscribe((response: any) => {
        console.log('Resposta da API:', response)
        for(let i = 0; i < response.length; i++){
          clients.push(response[i]);
        }
        resolve(clients)
      }, (error: any) => {
        console.error('Erro na requisição /cliente/query8', error)
        reject()
      })
    })
  }
}