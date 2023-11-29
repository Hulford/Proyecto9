import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageComponent } from './pages/product-Page/product-Page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
ProductPageComponent
  ],
  imports: [
CommonModule,
ProductsRoutingModule,
ReactiveFormsModule
  ]
})
export class ProductsModule { }
