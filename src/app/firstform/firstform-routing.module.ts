import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstformPage } from './firstform.page';

const routes: Routes = [
  {
    path: '',
    component: FirstformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstformPageRoutingModule {}
