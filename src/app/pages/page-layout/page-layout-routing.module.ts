import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [
  {
    path: 'pages/page-layout',
    component: PageLayoutComponent
  },
  {
    path: '',
    component: PageLayoutComponent
  },
  {
    path: 'loan',
    loadChildren: () => import('./../page-loan/page-loan.module').then(m => m.PageLoanModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
