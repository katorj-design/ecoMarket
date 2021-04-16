import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcoTipsPageRoutingModule } from './eco-tips-routing.module';

import { EcoTipsPage } from './eco-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcoTipsPageRoutingModule
  ],
  declarations: [EcoTipsPage]
})
export class EcoTipsPageModule {}
