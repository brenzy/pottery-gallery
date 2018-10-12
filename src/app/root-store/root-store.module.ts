import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {GalleriesStoreModule } from './galleries-store/galleries-store.module';

@NgModule({
  imports: [
    CommonModule,
   GalleriesStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}
