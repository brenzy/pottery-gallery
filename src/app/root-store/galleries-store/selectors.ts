import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Gallery } from '../../models/gallery';

export const getIsLoaded = (state: State) => {
  return state.isLoaded;
};

export const getGalleries = (state: State) => state.galleries;

export const getCurrentGallery = (state: State) => {
  if (state.isLoaded && state.currentGalleryName) {
    return state.galleryMap[state.currentGalleryName];
  }
  return null;
};

export const getGallery = (state: State, props: any) => {
  if (state.isLoaded) {
    return state.galleryMap[props.galleryName];
  }
  return null;
};

export const getCurrentGalleryisLoaded = (state: State) => {
  if (state.isLoaded && state.currentGalleryName) {
    const galleryImages = state.galleryMap[state.currentGalleryName].images;
    return galleryImages !== null && galleryImages !== undefined;
  }
  return false;
};

export const selectGalleriesState: MemoizedSelector<object, State>
    = createFeatureSelector<State>('galleryList');

export const selectGalleriesLoaded: MemoizedSelector<object, boolean>
    = createSelector(selectGalleriesState, getIsLoaded);

export const selectGalleries: MemoizedSelector<object, Gallery[]>
  = createSelector(selectGalleriesState, getGalleries);

export const selectCurrentGallery: MemoizedSelector<object, Gallery>
  = createSelector(selectGalleriesState, getCurrentGallery);

export const selectCurrentGalleryIsLoaded: MemoizedSelector<object, boolean>
  = createSelector(selectGalleriesState, getCurrentGalleryisLoaded);

