import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'types', pathMatch: 'full' },
  { path: 'price', loadComponent: () => import('./pages/price/price.component').then(m => m.PriceComponent) },
  { path: 'types', loadComponent: () => import('./pages/types/types.component').then(m => m.TypesComponent) },
  { path: 'cultivation-places', loadComponent: () => import('./pages/cultivation-places/cultivation-places.component').then(m => m.CultivationPlacesComponent) },
  { path: 'seasons', loadComponent: () => import('./pages/seasons/seasons.component').then(m => m.SeasonsComponent) },
  { path: 'farming', loadComponent: () => import('./pages/farming/farming.component').then(m => m.FarmingComponent) },
  { path: 'medicinal-uses', loadComponent: () => import('./pages/medicinal-uses/medicinal-uses.component').then(m => m.MedicinalUsesComponent) },
  { path: 'culinary-uses', loadComponent: () => import('./pages/culinary-uses/culinary-uses.component').then(m => m.CulinaryUsesComponent) },
  { path: 'export-trends', loadComponent: () => import('./pages/export-trends/export-trends.component').then(m => m.ExportTrendsComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'faqs', loadComponent: () => import('./pages/faqs/faqs.component').then(m => m.FaqsComponent) },
  { path: '**', redirectTo: 'types' }
];
