import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmployeePerformanceService {
  url = 'http://localhost:8080/venda' 

  constructor(private http: HttpClient) {
    
  }

  readEmployeePerformanceService(employeeName: string) {
    let params = new HttpParams()
    params = params.set('nome', employeeName)
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/query2', { params: params }).subscribe((response: any) => {
        console.log('Resposta da API:', response)
        resolve(response)
      }, (error: any) => {
        console.error('Erro na requisição /cliente/query2', error)
        reject()
      })
    })
  }
}