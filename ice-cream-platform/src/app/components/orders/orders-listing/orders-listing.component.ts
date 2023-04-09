import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersSearchService } from 'src/app/services/orders-search.service';

@Component({
  selector: 'app-orders-listing',
  templateUrl: './orders-listing.component.html',
  styleUrls: ['./orders-listing.component.css', '../../../../assets/styles/nicepage.css']
})
export class OrdersListingComponent {
  orders: any
  service: OrdersSearchService
  type: any

  constructor(private route: ActivatedRoute, private router: Router, private searchService: OrdersSearchService) {
    this.service = searchService;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (params: any) => {
      console.log(params)
      this.type = params.searchType
      if (this.type == 'client') {
        this.orders = this.service.readOrdersByStore(params.searchValue)
      }
      if (this.type == 'store') {
        this.orders = this.service.readOrdersByClient(params.searchValue)
      }
    });
  }
}
