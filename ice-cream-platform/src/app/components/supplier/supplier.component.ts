import { SuppliersSearchService } from './../../services/suppliers-search.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css', '../../../assets/styles/nicepage.css']
})
export class SupplierComponent {
  suppliers: any
  service: SuppliersSearchService
  type: any

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SuppliersSearchService) {
    this.service = searchService;
  }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    this.suppliers = await this.service.readSuppliers()
  }

}