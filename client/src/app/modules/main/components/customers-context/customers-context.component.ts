import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    this.dataSource = new MatTableDataSource<Customer>(this.itemAddonsList);
  }


  customerForm = new FormGroup({
    customerId: new FormControl(''),
    customerName: new FormControl('', Validators.required),
    customerAddress: new FormControl('', Validators.required),
  });

  displayedColumns = ['Id', 'Name', 'Address'];

  customerOnSubmit() {

    console.log(this.customerForm);
    if (this.customerForm.valid) {
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
    this.customerForm.value.customerId = element.id;
    this.customerForm.value.customerName = element.name;
    this.customerForm.value.customerAddress = element.address;
  }

  Filterchange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  handlePage(event: PageEvent) {
    const selectedPageSize = event.pageSize;
    this.loadData(selectedPageSize);
  }

  btnResetOnClick() {
    this.customerForm.reset();
  }
}
