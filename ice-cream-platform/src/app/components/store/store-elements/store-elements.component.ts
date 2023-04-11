import { StoreSearchService } from './../../../services/store-search.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-store-elements',
  templateUrl: './store-elements.component.html',
  styleUrls: ['./store-elements.component.css', '../../../../assets/styles/nicepage.css']
})
export class StoreElementsComponent {
  suppliers: any
  employees: any
  service: StoreSearchService
  type: any

  constructor(private route: ActivatedRoute, private router: Router, private searchService: StoreSearchService) {
    this.service = searchService;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (params: any) => {
      console.log(params)
      this.getData(params)
    });
  }

  async getData(params: any) {
    this.type = params.searchType
    if (params.searchType == 'employees') {
      this.employees = await this.service.readEmployees(params.storeName)
      console.log("employees " + params.storeName)
    }
    if (params.searchType == 'suppliers') {
      this.suppliers = await this.service.readSuppliers(params.storeName)
    }
  }
}
