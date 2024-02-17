import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../share/service/customer/customer-service.service";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

interface Customer {
  id: string;
  name: string;
  address: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-customers-context',
  templateUrl: './customers-context.component.html',
  styleUrls: ['./customers-context.component.scss']
})
export class CustomersContextComponent implements AfterViewInit, OnInit {

  customer: Customer = {address: "", id: "", name: ""}
  isTableRowSelected = false;
  dataSource: MatTableDataSource<Customer>;
  itemAddonsList: Customer[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.loadData(10);
  }


  constructor(private customerService: CustomerServiceService) {
    console.log(this.isTableRowSelected);
    this.dataSource = new MatTableDataSource<Customer>(this.itemAddonsList);
  }


  customerForm = new FormGroup({
    customerId: new FormControl(this.customer.id),
    customerName: new FormControl(this.customer.name, Validators.required),
    customerAddress: new FormControl(this.customer.address, Validators.required),
  });

  displayedColumns = ['Id', 'Name', 'Address'];

  customerOnSubmit() {

    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.isTableRowSelected = false;
      const customer = {name: this.customerForm.value.customerName, address: this.customerForm.value.customerAddress};
      const standardResponse = this.customerService.createCustomer(customer);
      const subscription = standardResponse.subscribe(value => console.log('value'));
      console.log(subscription);
      this.loadData(10);
    }
  }

  updateOnClick() {

  }

  private loadData(pageSize:number) {
    const observable = this.customerService.findAll(0, pageSize);
    observable.subscribe((response) => {
      const customers: Customer[] = response.data.content;
      this.dataSource = new MatTableDataSource<Customer>(customers);
    });
  }

  tblRowOnClick(element: any) {
    console.log(this.isTableRowSelected)
    this.isTableRowSelected = true;
    const customer: Customer = {
      name: element.customerName,
      id: element.customerId,
      address: element.customerAddress
    }
    this.customer = customer;
    console.log(this.isTableRowSelected)
  }

  Filterchange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  handlePage(event: PageEvent) {
    const selectedPageSize = event.pageSize;
    this.loadData(selectedPageSize);
  }
}
