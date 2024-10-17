import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    // other routes
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // set Dashboard as default route
];
