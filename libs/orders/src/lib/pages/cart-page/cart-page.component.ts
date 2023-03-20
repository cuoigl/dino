import { takeUntil, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartItemDetailed } from '../../models/cart';

import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [],
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  endSubs$: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this._getCartDetails();
  }

  ngOnDestroy() {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }

  private _getCartDetails() {
    this.cartService.cart$
      .pipe(takeUntil(this.endSubs$))
      .subscribe((respCart) => {
        this.cartItemsDetailed = [];
        this.cartCount = respCart?.items.length ?? 0;
        respCart.items.forEach((cartItem) => {
          this.ordersService
            .getProduct(cartItem.productId)
            .subscribe((respProduct) => {
              this.cartItemsDetailed.push({
                product: respProduct,
                quantity: cartItem.quantity,
              });
            });
        });
      });
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }

  updateCartItemQuantity(event, cartItem: CartItemDetailed) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value,
      },
      true
    );
  }

  backToShop() {
    this.router.navigate([`products`]);
  }
}
