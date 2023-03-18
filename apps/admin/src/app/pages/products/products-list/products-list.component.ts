import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@dino/products';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this._getProducts();
  }

  private _getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
