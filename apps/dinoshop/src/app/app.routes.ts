import { HomePageComponent } from './pages/home-page/home-page.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];
