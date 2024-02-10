import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../share/service/customer/customer-service.service";

interface Customer {
  customerId: string;
  customerName: string;
  customerAddress: string;
}

@Component({
  selector: 'app-customers-context',
  templateUrl: './customers-context.component.html',
  styleUrls: ['./customers-context.component.scss']
})
export class CustomersContextComponent {
  customer: Customer = {customerAddress: "", customerId: "", customerName: ""}
  isTableRowSelected = false;


  constructor(private customerService: CustomerServiceService, private fb: FormBuilder) {
    console.log(this.isTableRowSelected)

  }

  customerForm = new FormGroup({
    customerId: new FormControl(this.customer.customerId, Validators.required),
    customerName: new FormControl(this.customer.customerName, Validators.required),
    customerAddress: new FormControl(this.customer.customerAddress, Validators.required),
  });
  dataSource = [
    {
      customerId: 'C001',
      customerName: 'Sachin',
      customerAddress: 'Beruwala'
    }, {
      customerId: 'C002',
      customerName: 'Nimal',
      customerAddress: 'Beruwala'
    }
  ];
  displayedColumns = ['customerId', 'customerName', 'customerAddress'];

  customerOnSubmit() {

    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.isTableRowSelected = false;
    }
  }

  updateOnClick() {

  }


  tblRowOnClick(element: any) {
    console.log(this.isTableRowSelected)
    this.isTableRowSelected = true;
    const customer: Customer = {
      customerName: element.customerName,
      customerId: element.customerId,
      customerAddress: element.customerAddress
    }
    this.customer = customer;
    console.log(this.isTableRowSelected)
  }
}
