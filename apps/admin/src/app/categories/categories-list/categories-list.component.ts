import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@dino/products';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }
}
