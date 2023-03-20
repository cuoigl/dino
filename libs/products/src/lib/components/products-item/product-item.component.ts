import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product';

@Component({
  selector: 'products-item',
  templateUrl: './products-item.component.html',
  styles: [],
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectProduct(productId) {
    this.router.navigateByUrl(`products/${productId}`);
  }
}
