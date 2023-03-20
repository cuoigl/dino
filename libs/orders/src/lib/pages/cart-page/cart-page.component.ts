import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ProductsService } from '@dino/products';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [],
})
export class CartPageComponent implements OnInit {
  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this._getCartDetails();
  }

  private _getCartDetails() {
    this.cartService.cart$.pipe().subscribe((respCart) => {
      respCart.items.forEach((cartItem) => {
        console.log(cartItem);
      });
    });
  }

  backToShop() {
    this.router.navigate([`products`]);
  }

  deleteCartItem() {}
}
