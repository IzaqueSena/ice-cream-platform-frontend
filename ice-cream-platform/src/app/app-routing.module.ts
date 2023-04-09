import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListingComponent } from './components/clients/clients-listing/clients-listing.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'clients-search', component:  ClientsComponent},
  {path: 'orders-search', component: OrdersComponent},
  {path: 'clients-search/clients-listing', component: ClientsListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
