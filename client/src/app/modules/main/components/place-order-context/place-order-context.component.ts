import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemsService} from "../../../share/service/item/items.service";
import {CustomerServiceService} from "../../../share/service/customer/customer-service.service";
import {Item} from "../items-context/items-context.component";
import {Customer} from "../customers-context/customers-context.component";

@Component({
  selector: 'app-place-order-context',
  templateUrl: './place-order-context.component.html',
  styleUrls: ['./place-order-context.component.scss']
})
export class PlaceOrderContextComponent {
  itemIds: string[] = [];
  customerIds: string[] = [];

  constructor(private itemService: ItemsService, private customerService: CustomerServiceService) {
    this.setItemsIds();
    this.setCustomerIds();
  }

  private setItemsIds() {
    this.itemService.findAll(0, 100).subscribe(res => {
      const items: Item[] = res.data.content;
      this.itemIds = items.map(item => item.id);
    });
  }

  private setCustomerIds() {
    this.customerService.findAll(0, 100).subscribe(res => {
      const customers: Customer[] = res.data.content;
      this.customerIds = customers.map(customer => customer.id);
    });
  }

  itemForm: FormGroup = new FormGroup({
    id: new FormControl('',),
    description: new FormControl('', Validators.required),
    qty: new FormControl(0, [Validators.required, Validators.min(1)]),
    qtyNeed: new FormControl(0, [Validators.required, Validators.min(1)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
  });


  itemOnAdd() {

  }


  customerForm = new FormGroup({
    customerId: new FormControl(''),
    customerName: new FormControl('', Validators.required),
    customerAddress: new FormControl('', Validators.required),
  });
  selectedItemId: string='';
  selectedCustomerId: any;

  onItemSelected() {
    console.log("Selected item ID:", this.selectedItemId);
    this.itemService.getItem(this.selectedItemId).subscribe(res=>{
      const item:Item = res.data;
      this.itemForm.patchValue({
        id: item.id,
        description: item.description,
        qty: item.qty,
        price: item.price
      });
    })
  }

  onCustomerIdSelected() {
    console.log("Selected item ID:", this.selectedCustomerId);
    this.customerService.getCustomer(this.selectedCustomerId).subscribe(res =>{
      const customer : Customer = res.data;
      this.customerForm.patchValue({
        customerId: customer.id,
        customerName: customer.name,
        customerAddress: customer.address
      });
    })

  }
}
