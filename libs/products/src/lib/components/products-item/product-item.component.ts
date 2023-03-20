import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartItem, CartService } from '@dino/orders';
import { Product } from '../../models/product';

@Component({
  selector: 'products-item',
  templateUrl: './products-item.component.html',
  styles: [],
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {}

  selectProduct(productId) {
    this.router.navigateByUrl(`products/${productId}`);
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.cartService.setCartItem(cartItem);
  }
}
