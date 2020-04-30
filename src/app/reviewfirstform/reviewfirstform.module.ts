import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewfirstformPageRoutingModule } from './reviewfirstform-routing.module';

import { ReviewfirstformPage } from './reviewfirstform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewfirstformPageRoutingModule
  ],
  declarations: [ReviewfirstformPage]
})
export class ReviewfirstformPageModule {}
