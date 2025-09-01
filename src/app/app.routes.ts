import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  { path: 'quotes', loadComponent: () => import('./pages/quotes/quotes.page').then(m => m.QuotesPage) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'quotes',
    loadComponent: () => import('./pages/quotes/quotes.page').then( m => m.QuotesPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
];
