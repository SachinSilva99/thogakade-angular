import { Injectable } from '@angular/core';
import {Customer} from "../shared/model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  saveCustomer(customer:Customer){
    console.log(customer);
  }
}
