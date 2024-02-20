import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiPathService} from "../api-path/api-path.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  constructor(private http: HttpClient, private apiPathService: ApiPathService) {
  }

  hostName: string = this.apiPathService.baseUrl + "items";


  public createItem(item: any): Observable<any> {
    return this.http.post(this.hostName, item);
  }


  updateItem(id: string, item: any): Observable<any> {
    return this.http.put(this.hostName + "/" + id, item);
  }


  deleteItem(itemId: string): Observable<any> {
    return this.http.delete(this.hostName + '/' + itemId);
  }

  getItem(itemId: string): Observable<any> {
    return this.http.get(this.hostName + '/' + itemId);
  }

  findAll(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(this.hostName + `?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
