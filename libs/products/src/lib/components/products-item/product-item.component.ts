import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'products-item',
  templateUrl: './products-item.component.html',
  styles: [],
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Product;

  ngOnInit() {}
}
