import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl = "https://sheltered-springs-67444.herokuapp.com/";
private productUrl = this.baseUrl+'product';
  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.baseUrl+'product');
  }

  getProductDetails(id){
    return this.http.get(this.baseUrl+'product/'+id);
  }

  addnewProduct(prdcttitle,imgurl,price,desc){
    this.http.post(this.productUrl,{title:prdcttitle,"imageUrl":imgurl,"price":price,"description":desc})
    .subscribe(res => {
      console.log(res);
    });

  }

  removeProduct(id){
    this.http.delete('https://sheltered-springs-67444.herokuapp.com/product/'+id)
    .subscribe(res => console.log(res));
  }
}
