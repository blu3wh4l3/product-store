import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AddProductFormComponent} from './add-product-form/add-product-form.component';
import {NewProductComponent} from './new-product/new-product.component';

const routes: Routes = [
  {path:'',component:ProductListingComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'product_new',component:AddProductFormComponent},
  {path:'newProductadded',component:NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
