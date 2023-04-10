import { ClientsSearchService } from './../../../services/clients-search.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styleUrls: ['./clients-listing.component.css', '../../../../assets/styles/nicepage.css']
})
export class ClientsListingComponent {
  clients: any
  service: ClientsSearchService
  type: any

  constructor(private route: ActivatedRoute, private router: Router, private searchService: ClientsSearchService) {
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
    if (params.searchType == 'date') {
      this.clients = await this.searchService.readClientsByDate(params.searchValue)
    }
    if (params.searchType == 'value') {
      this.clients = await this.searchService.readClientsByValue(params.searchValue)
    }
  }
 
}
