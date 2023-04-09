import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListingComponent } from './components/clients/clients-listing/clients-listing.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OrdersListingComponent } from './components/orders/orders-listing/orders-listing.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreComponent } from './components/store/store.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'clients-search', component:  ClientsComponent},
  {path: 'orders-search', component: OrdersComponent},
  {path: 'clients-search/clients-listing', component: ClientsListingComponent},
  {path: 'orders-search/orders-listing', component: OrdersListingComponent},
  {path: 'products-search', component: ProductsComponent},
  {path: 'employees-search', component: EmployeeComponent},
  {path: 'stores-search', component: StoreComponent},
  {path: 'supplier-search', component: SupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
