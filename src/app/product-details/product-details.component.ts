import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product : any;
  loading = true;
  constructor(private productService : ProductService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.productService.getProductDetails(param.id)
      .subscribe(res =>{
      this.product = res;
        this.loading = false;
      });
    });
    

   
  }

}
