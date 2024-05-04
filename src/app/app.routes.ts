import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'check-award',
    loadComponent: () => import('./pages/check-award/check-award.page').then(m => m.CheckAwardPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
