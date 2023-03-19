import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { OrdersService } from '@dino/orders';
import { ProductsService } from '@dino/products';
import { UsersService } from '@dino/users';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  statistics = [];

  constructor(
    private userService: UsersService,
    private productService: ProductsService,
    private ordersService: OrdersService
  ) {}
  ngOnInit() {
    combineLatest([
      this.ordersService.getOrdersCount(),
      this.productService.getProductsCount(),
      this.userService.getUsersCount(),
      this.ordersService.getTotalSales(),
    ]).subscribe((values) => {
      this.statistics = values;
      console.log(this.statistics);
    });
  }
}
