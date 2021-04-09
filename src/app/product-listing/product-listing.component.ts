import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
products:any = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  

}
