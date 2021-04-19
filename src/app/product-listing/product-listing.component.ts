import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
products:any = [];
loading = true;
confirm = false;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
      // console.log(res);
      this.loading = false;
    }, err => {
      console.log(err);
    })
  }
  

  productDelete(id){
    this.confirm = window.confirm("Are you sure u want to delete this product!!");
    if(this.confirm){
      this.productService.removeProduct(id);
      this.products = this.products.filter(item => item.id != id);
    }
  }

}
