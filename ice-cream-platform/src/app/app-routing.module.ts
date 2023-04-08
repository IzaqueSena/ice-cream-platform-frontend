import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'clients-search', component:  ClientsComponent},
  {path: 'orders-search', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
