import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SuppliersSearchService {
  url = 'http://localhost:8080/fornecedor' 

  constructor(private http: HttpClient) {
    
  }
  
  readSuppliers() {
    return new Promise((resolve, reject) => {
      let suppliers = Array()
      this.http.get(this.url + '/query9').subscribe((response: any) => {
        console.log('Resposta da API:', response)
        for(let i = 0; i < response.length; i++){
          suppliers.push(response[i]);
        }
        resolve(suppliers)
      }, (error: any) => {
        console.error('Erro na requisição /fornecedor/query9', error)
        reject()
      })
    })
  }

  }