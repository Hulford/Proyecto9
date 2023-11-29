import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageComponent } from './pages/product-Page/product-Page.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
ProductPageComponent
  ],
  imports: [
CommonModule,
ProductsRoutingModule
  ]
})
export class ProductsModule { }
