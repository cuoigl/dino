import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Order, OrdersService } from '@dino/orders';
import { UsersService } from '@dino/users';

@Component({
  selector: 'admin-orders-detail',
  templateUrl: './orders-detail.component.html',
  styles: [],
})
export class OrdersDetailComponent implements OnInit {
  order: Order;
  constructor(
    private ordersService: OrdersService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._getOrder();
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.ordersService.getOrder(params.id).subscribe((order) => {
          this.order = order;
        });
      }
    });
  }

  getCountryName(countryKey: string) {
    if (countryKey) return this.usersService.getCountry(countryKey);
  }
}
