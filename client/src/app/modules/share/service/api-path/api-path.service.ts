import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPathService {
  public baseUrl = 'http://localhost:8000/thogakade/api/v1/';
  // public baseUrl = 'http://85.31.225.183:8080/api/v1/pos';
  constructor() { }
}
