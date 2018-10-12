import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GalleriesEffects } from './effects';
import { GalleriesReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('galleryList', GalleriesReducer),
    EffectsModule.forFeature([GalleriesEffects])
  ],
  providers: [GalleriesEffects]
})
export class GalleriesStoreModule { }
