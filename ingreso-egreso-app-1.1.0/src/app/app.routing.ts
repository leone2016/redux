import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {AppBlankComponent} from './layouts/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: FullComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'authentication',
    component: AppBlankComponent,
    loadChildren: () => import('./modules/authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];
