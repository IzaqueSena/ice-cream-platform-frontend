import { BestSellingProductService } from './../../services/best-selling-product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../../../assets/styles/nicepage.css']
})
export class ProductsComponent {
  show: boolean
  bestSellingProductType?: string
  service: BestSellingProductService

  constructor(private searchService: BestSellingProductService) {
    this.show = false
    this.service = searchService
  }

  showProduct() {
    this.bestSellingProductType = this.service.readBestSellingProductType()
    this.show = true
  }
}
