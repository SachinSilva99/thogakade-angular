import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../share/service/customer/customer-service.service";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import Swal from "sweetalert2";

export interface Customer {
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
  private currentPage = 0;
  dataSource: MatTableDataSource<Customer>;
  itemAddonsList: Customer[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.loadData(100,0);
  }


  constructor(private customerService: CustomerServiceService) {
    this.dataSource = new MatTableDataSource<Customer>(this.itemAddonsList);
  }


  customerForm = new FormGroup({
    customerId: new FormControl(''),
    customerName: new FormControl('', Validators.required),
    customerAddress: new FormControl('', Validators.required),
  });

  displayedColumns = ['Id', 'Name', 'Address', 'Actions'];

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

    }else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Fields cannot be empty",
        showConfirmButton: false,
        timer: 2000
      });
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
        this.loadData(10,0);
        this.customerForm.reset();
      }
    });
  }

  private updateCustomer(customer: Customer) {
    const observable = this.customerService.updateCustomer(customer.id, customer);
    observable.subscribe(res => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Customer updated successfully",
        showConfirmButton: false,
        timer: 2000
      });
      this.loadData(10,0);
      this.customerForm.reset();
    });
  }


  private loadData(pageSize: number, pageNumber:number) {
    console.log("Requested Page Size:", pageSize);
    console.log("Requested Page Number:", pageNumber);
    const observable = this.customerService.findAll(pageNumber, pageSize);
    observable.subscribe((response) => {
      const customers: Customer[] = response.data.content;
      this.dataSource = new MatTableDataSource<Customer>(customers);
      this.dataSource.paginator = this.paginator;
      this.paginator.length = response.data.totalElements;
      this.paginator.pageSize = response.data.size;
      this.paginator.pageIndex = response.data.number;
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
    const selectedPageNumber = event.pageIndex;
    console.log("Requested Page Size:", selectedPageSize);
    console.log("Requested Page Number:", selectedPageNumber);
    this.currentPage = selectedPageNumber;
    this.loadData(selectedPageSize, selectedPageNumber);
  }

  btnResetOnClick() {
    this.customerForm.reset();
  }

  deleteCustomer(element: Customer) {
    Swal.fire({
      title: `
          <p>
                 Are you sure you want to delete
                    Id : ${element.id}
                   Name : ${element.name}
          </p>`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const observable = this.customerService.deleteCustomer(element.id);
        observable.subscribe(() => {
          Swal.fire("Deleted!", "", "success");
          this.loadData(10,0);
        });
      }
    });
  }
}
