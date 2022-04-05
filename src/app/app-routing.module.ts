import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { PageLoanModule } from './pages/page-loan/page-loan.module';

const routes: Routes = [
  {
    path: 'pages/page-layout',
    loadChildren: () => import('./pages/page-layout/page-layout.module').then(m => m.PageLayoutModule)
  },
  {
    path: 'page-layout',
    loadChildren: () => import('./pages/page-layout/page-layout.module').then(m => m.PageLayoutModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./pages/page-loan/page-loan.module').then(m => m.PageLoanModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
