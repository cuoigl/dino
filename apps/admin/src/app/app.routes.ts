import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ShellComponent } from './shared/shell/shell.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoriesListComponent },
    ],
  },
];
