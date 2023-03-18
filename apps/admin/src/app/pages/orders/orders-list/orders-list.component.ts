import { Router } from '@angular/router';
import { Order, OrdersService } from '@dino/orders';
import { Component, OnInit } from '@angular/core';

const ORDER_STATUS = {
  0: {
    label: 'Pending',
    color: 'primary',
  },
  1: {
    label: 'Processed',
    color: 'warning',
  },
  2: {
    label: 'Shipped',
    color: 'warning',
  },
  3: {
    label: 'Delivered',
    color: 'success',
  },
  4: {
    label: 'Failed',
    color: 'danger',
  },
};

@Component({
  selector: 'admin-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  orderStatus = ORDER_STATUS;

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit() {
    this._getOrders();
    console.log(this.orderStatus);
  }

  showOrder(orderId) {
    this.router.navigateByUrl(`/orders/${orderId}`);
  }

  deleteOrder(orderId) {}

  _getOrders() {
    this.ordersService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
