import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstformPageRoutingModule } from './firstform-routing.module';

import { FirstformPage } from './firstform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FirstformPage]
})
export class FirstformPageModule {}
