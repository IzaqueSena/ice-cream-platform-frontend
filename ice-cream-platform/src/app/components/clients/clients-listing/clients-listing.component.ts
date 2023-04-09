import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styleUrls: ['./clients-listing.component.css', '../../../../assets/styles/nicepage.css']
})
export class ClientsListingComponent {
  clientes: any;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (params: any) => {
      console.log(params)
      this.clientes = this.clientes1;
    });
  }
 
  clientes1 = [
    {nome: 'izaque', email: 'iza@usp.br', endereco: 'rua'},
    {nome: 'a', email: 'iza@usp.br', endereco: 'rua'}
  ];
  
  clientes2 = [
    {nome: 'ib', email: 'iza@usp.br', endereco: 'rua'},
    {nome: 'c', email: 'iza@usp.br', endereco: 'rua'}
  ];
}
