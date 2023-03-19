import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './gallery.component.html',
  styles: [],
})
export class GalleryComponent implements OnInit {
  selectedImageUrl: string;

  @Input() images: string[];

  constructor() {}

  ngOnInit(): void {
    if (this.images.length) {
      this.selectedImageUrl = this.images[0];
    }
  }

  changeSelectedImage(image) {
    console.log('hangeSelectedImage');
    this.selectedImageUrl = image;
  }

  get hasImages() {
    return this.images?.length > 0;
  }
}
