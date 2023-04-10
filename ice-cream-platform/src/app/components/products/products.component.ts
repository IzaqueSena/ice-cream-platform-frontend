import { BestSellingProductService } from './../../services/best-selling-product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../../../assets/styles/nicepage.css']
})
export class ProductsComponent {
  show: boolean
  bestSellingProductType: any
  service: BestSellingProductService

  constructor(private searchService: BestSellingProductService) {
    this.show = false
    this.service = searchService
    this.bestSellingProductType = null
  }

  showProduct() {
    this.getData()
    
  }

  async getData() {
    this.bestSellingProductType = await this.service.readBestSellingProductType()
    if (this.bestSellingProductType != null) {
      this.show = true
    }
  }
}
