import {Component} from '@angular/core';
import {Customer} from "../shared/model/Customer";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customerId: string = '';
  customerName: string = '';
  customerAddress: string = '';

  constructor(private customerService: CustomerService) {
  }

  onAdd() {
    const customer: Customer = {
      id: this.customerId,
      name: this.customerName,
      address: this.customerAddress
    };

    this.customerService.saveCustomer(customer);
  }
}
