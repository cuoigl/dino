import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { ProductsItemComponent } from './components/products-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-prod/featured-products.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, ButtonModule],
  declarations: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    ProductsItemComponent,
    FeaturedProductsComponent,
  ],
  exports: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    ProductsItemComponent,
    FeaturedProductsComponent,
  ],
})
export class ProductsModule {}
