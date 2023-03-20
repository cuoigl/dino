import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BadgeModule,
    ButtonModule,
    InputNumberModule,
    InputMaskModule,
    DropdownModule,
    InputTextModule,
  ],
  declarations: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckoutPageComponent,
  ],
  exports: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckoutPageComponent,
  ],
})
export class OrdersModule {
  constructor(cartService: CartService) {
    cartService.intitCartLocalStorage();
  }
}
