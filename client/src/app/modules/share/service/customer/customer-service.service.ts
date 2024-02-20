import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathService} from "../api-path/api-path.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient, private apiPathService: ApiPathService) {
  }

  hostName: string = this.apiPathService.baseUrl + "customers";


  public createCustomer(customer: any): Observable<any> {
    return this.http.post(this.hostName,customer);
  }



  updateCustomer(id: string, customer: any): Observable<any> {
    return this.http.put(this.hostName + "/" + id, customer);
  }


  deleteCustomer(customerId: string): Observable<any> {
    return this.http.delete(this.hostName + '/' + customerId);
  }
  getCustomer(customerId: string): Observable<any> {
    return this.http.get(this.hostName + '/' + customerId);
  }

  findAll(pageNumber:number, pageSize:number): Observable<any> {
    return this.http.get(this.hostName + `?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
