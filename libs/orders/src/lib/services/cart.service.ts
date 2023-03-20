import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  intitCartLocalStorage() {
    const initalCart = {
      items: [],
    };

    const intialCartJson = JSON.stringify(initalCart);
    localStorage.setItem('cart', intialCartJson);
  }
}
