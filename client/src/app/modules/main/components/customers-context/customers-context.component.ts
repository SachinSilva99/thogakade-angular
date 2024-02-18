import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../share/service/customer/customer-service.service";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import Swal from "sweetalert2";

interface Customer {
  id: string;
  name: string;
  address: string;
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
    if (this.customerForm.valid) {
      const {customerId, customerName, customerAddress} = this.customerForm.value;
      const customer: Customer = {
        name: customerName as string,
        address: customerAddress as string,
        id: customerId as string
      };
      if (customerId) {
        this.updateCustomer(customer);
      } else {
        this.createCustomer(customer);
      }

    }
  }

  private createCustomer(customer: Customer) {
    const standardResponse = this.customerService.createCustomer(customer);
    standardResponse.subscribe(res => {
      if (res.statusCode === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Customer added successfully",
          text: `Customer Id : ${res.data}`,
          showConfirmButton: false,
          timer: 2000
        });
        this.loadData(10);
      }
    });
  }

  private updateCustomer(customer: Customer) {
    const observable = this.customerService.updateCustomer(customer.id, customer);
    observable.subscribe(res=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Customer updated successfully",
        showConfirmButton: false,
        timer: 2000
      });
      this.loadData(10);
    });
  }


  private loadData(pageSize: number) {
    const observable = this.customerService.findAll(0, pageSize);
    observable.subscribe((response) => {
      const customers: Customer[] = response.data.content;
      this.dataSource = new MatTableDataSource<Customer>(customers);
    });
  }

  tblRowOnClick(element: any) {
    this.customerForm.patchValue({
      customerId: element.id,
      customerName: element.name,
      customerAddress: element.address
    });
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
