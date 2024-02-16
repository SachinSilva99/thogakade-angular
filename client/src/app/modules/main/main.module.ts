import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CustomersContextComponent } from './components/customers-context/customers-context.component';
import { OrdersContextComponent } from './components/orders-context/orders-context.component';
import { PlaceOrderContextComponent } from './components/place-order-context/place-order-context.component';
import { ItemsContextComponent } from './components/items-context/items-context.component';
import { HomeContextComponent } from './components/home-context/home-context.component';
import {MatInputModule} from '@angular/material/input';
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MainHeaderNavbarComponent} from "../share/components/main-header-navbar/main-header-navbar.component";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    MainComponent,
    CustomersContextComponent,
    OrdersContextComponent,
    PlaceOrderContextComponent,
    ItemsContextComponent,
    HomeContextComponent,
    MainHeaderNavbarComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatInputModule,
    ShareModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class MainModule { }
