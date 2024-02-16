import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {CustomersContextComponent} from "./components/customers-context/customers-context.component";
import {HomeContextComponent} from "./components/home-context/home-context.component";
import {ItemsContextComponent} from "./components/items-context/items-context.component";
import {PlaceOrderContextComponent} from "./components/place-order-context/place-order-context.component";

const routes: Routes = [
  { path: '', component: MainComponent,children:[
      {path:'',redirectTo:'home',pathMatch:"full"},
      { path: 'home', component: HomeContextComponent },
      { path: 'customers', component: CustomersContextComponent },
      { path: 'items', component: ItemsContextComponent },
      { path: 'placeorder', component: PlaceOrderContextComponent },

    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
