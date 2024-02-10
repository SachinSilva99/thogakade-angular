import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {CustomersContextComponent} from "./components/customers-context/customers-context.component";
import {CustomerGuard} from "./components/customers-context/customer-guard";

const routes: Routes = [{path: '', component: MainComponent},
  {
    path: 'customers',
    component: CustomersContextComponent,
    // children: [{path: 'test', component: TestComponent, canActivate: [CustomerGuard]}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
