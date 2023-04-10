import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BestSellingProductService {
    bestSellingProductType = "sorvete de casquinha"

    readBestSellingProductType() {
        return this.bestSellingProductType
    }
}