import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BestSellingProductService {
  url = 'http://localhost:8080/venda' 

  constructor(private http: HttpClient) {
    
  }

  readBestSellingProductType() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/query3').subscribe((response: any) => {
        console.log('Resposta da API:', response)
        resolve(response)
      }, (error: any) => {
        console.error('Erro na requisição /cliente/query3', error)
        reject()
      })
    })
  }
}