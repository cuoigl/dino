import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@dino/products';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this._getCategories();
  }

  deleteCategory(categoyId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this category',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(categoyId).subscribe(
          (response) => {
            this._getCategories();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Category is deleted!',
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Category is not deleted!',
            });
          }
        );
      },
      reject: (type) => {},
    });
  }

  private _getCategories() {
    this.categoriesService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }
}
