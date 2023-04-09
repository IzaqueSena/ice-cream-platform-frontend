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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ClientsComponent,
    OrdersComponent,
    ClientsListingComponent,
    OrdersListingComponent,
    ProductsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ClientsSearchService,
    OrdersSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
