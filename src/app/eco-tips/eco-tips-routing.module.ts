import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoTipsPage } from './eco-tips.page';

const routes: Routes = [
  {
    path: '',
    component: EcoTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoTipsPageRoutingModule {}
