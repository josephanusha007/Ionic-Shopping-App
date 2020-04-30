import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewfirstformPage } from './reviewfirstform.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewfirstformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewfirstformPageRoutingModule {}
