import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CustomersContextComponent } from './components/customers-context/customers-context.component';
import { OrdersContextComponent } from './components/orders-context/orders-context.component';
import { PlaceOrderContextComponent } from './components/place-order-context/place-order-context.component';
import { ItemsContextComponent } from './components/items-context/items-context.component';
import { HomeContextComponent } from './components/home-context/home-context.component';


@NgModule({
  declarations: [
    MainComponent,
    CustomersContextComponent,
    OrdersContextComponent,
    PlaceOrderContextComponent,
    ItemsContextComponent,
    HomeContextComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
