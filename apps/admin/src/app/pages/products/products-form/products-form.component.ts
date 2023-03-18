import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

import { CategoriesService, ProductsService } from '@dino/products';

@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: [],
})
export class ProductsFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  editmode = false;

  imageDisplay: string | ArrayBuffer;

  categories = [];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this._initForm();
    this._getCategories();
  }

  onSubmit() {}

  onCancel() {
    this.location.back();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: [''],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      isFeatured: [''],
    });
  }

  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  private _getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  get productForm() {
    return this.form.controls;
  }
}
