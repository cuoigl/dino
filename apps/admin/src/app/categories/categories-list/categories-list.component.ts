import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: 'Category-1',
      icon: 'Icon-1',
    },
    {
      id: 2,
      name: 'Category-2',
      icon: 'Icon-3',
    },
    {
      id: 3,
      name: 'Category-3',
      icon: 'Icon-3',
    },
  ];
  ngOnInit(): void {}
}
