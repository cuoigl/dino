import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: [],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  quantity: number;
  endSubs$: Subject<any> = new Subject();

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.productid) {
        this._getProduct(params.productid);
      }
    });
  }

  ngOnDestroy() {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }

  addProductToCart() {}

  private _getProduct(id: string) {
    this.productsService
      .getProduct(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((product) => {
        this.product = product;
      });
  }
}
