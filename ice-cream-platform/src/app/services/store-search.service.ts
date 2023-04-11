import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StoreSearchService {
  urlEmployee = 'http://localhost:8080/funcionario/query4' 
  urlSupplier = 'http://localhost:8080/fornecedor/query5' 

  constructor(private http: HttpClient) {
    
  }

  readEmployees(storeName: any) {
    let params = new HttpParams()
    let employees = Array()
    params = params.set('nomeLoja', storeName)
    return new Promise((resolve, reject) => {
      this.http.get(this.urlEmployee, { params: params }).subscribe((response: any) => {
        console.log('Resposta da API:', response)
        for(let i = 0; i < response.length; i++){
          employees.push(response[i]);
        }
        resolve(employees)
      }, (error: any) => {
        console.error('Erro na requisição /funcionario/query4', error)
        reject()
      })
    })
  }

  readSuppliers(storeName: any) {
    let params = new HttpParams()
    let suppliers = Array()
    params = params.set('nomeLoja', storeName)
    return new Promise((resolve, reject) => {
      this.http.get(this.urlSupplier, { params: params }).subscribe((response: any) => {
        console.log('Resposta da API:', response)
        for(let i = 0; i < response.length; i++){
          suppliers.push(response[i]);
        }
        resolve(suppliers)
      }, (error: any) => {
        console.error('Erro na requisição fornecedor/query5', error)
        reject()
      })
    })
  }
}