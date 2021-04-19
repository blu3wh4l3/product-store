import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import {ProductService} from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  addproductformgroup : FormGroup;
  submitted : boolean = true;
  frm_title:string;
  frm_imgurl:string;
  frm_description:string;
  frm_price:number;
  added : boolean;
  constructor(private formBuilder : FormBuilder, private productService : ProductService, private router:Router) { }

  ngOnInit(): void {
    this.addproductformgroup = this.formBuilder.group({
      title:['',Validators.required],
      imageurl : ['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required]
    });
  }

  addProduct(){
    if(this.addproductformgroup.valid){
      this.submitted = false;
      this.productService.addnewProduct(this.addproductformgroup.value.title,
         this.addproductformgroup.value.imageurl,this.addproductformgroup.value.price,this.addproductformgroup.value.description);


    }

  
  this.added = window.confirm("Successfully added the product");
  if(this.added){
    this.router.navigate(["/"]);
  }
    
    // if(this.router.navigate(["/"]))  {
    //   setTimeout( function(){
    //     location.reload();
    //   },1000);
    // }
  }

}
