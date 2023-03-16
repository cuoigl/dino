import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
];
