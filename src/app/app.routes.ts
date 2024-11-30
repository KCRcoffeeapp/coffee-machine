import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeasComponent } from './pages/home/categories/teas/teas.component';
import { BrewingComponent } from './pages/brewing/brewing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Root route for the home page
  { path: 'teas', component: TeasComponent }, // Route for the popular page
  { path: 'brewing', component: BrewingComponent }, // Route for the brewing page
];
