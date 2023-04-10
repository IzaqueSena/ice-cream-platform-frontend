import { StoreSearchService } from './services/store-search.service';
import { EmployeePerformanceService } from './services/employee-performance.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { ClientsListingComponent } from './components/clients/clients-listing/clients-listing.component';
import { ClientsSearchService } from './services/clients-search.service';
import { OrdersListingComponent } from './components/orders/orders-listing/orders-listing.component';
import { OrdersSearchService } from './services/orders-search.service';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StoreComponent } from './components/store/store.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SuppliersSearchService } from './services/suppliers-search.service';
import { BestSellingProductService } from './services/best-selling-product.service';
import { StoreElementsComponent } from './components/store/store-elements/store-elements.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ClientsComponent,
    OrdersComponent,
    ClientsListingComponent,
    OrdersListingComponent,
    ProductsComponent,
    EmployeeComponent,
    StoreComponent,
    SupplierComponent,
    StoreElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClientsSearchService,
    OrdersSearchService,
    SuppliersSearchService,
    BestSellingProductService,
    EmployeePerformanceService,
    StoreSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

