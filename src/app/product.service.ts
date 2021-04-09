import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl = "https://sheltered-springs-67444.herokuapp.com/";
  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.baseUrl+'product');
  }
}
