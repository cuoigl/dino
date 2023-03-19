import { takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'products-featured',
  templateUrl: './featured-products.component.html',
  styles: [],
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {
  featuredProducts: Product[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    this._getFeaturedProducts();
  }

  ngOnDestroy() {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }

  private _getFeaturedProducts() {
    this.productsServices
      .getFeaturedProducts(4)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((products) => {
        this.featuredProducts = products;
      });
  }
}
