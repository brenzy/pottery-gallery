import { GalleriesActionTypes, GalleriesActionsUnion } from './actions';
import { State, initialState } from './state';

// https://github.com/amcdnl/ngrx-actions/issues/23 - This was changed from an arrow function to a named function, because
// it was producing an error in the prod build
export function GalleriesReducer(state: State = initialState, action: GalleriesActionsUnion): State {
  switch (action.type) {
    case GalleriesActionTypes.LOAD_GALLERIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        galleries: action.galleries,
        galleryMap: action.galleryMap
      };
    case GalleriesActionTypes.SET_CURRENT_GALLERY:
      return {
        ...state,
        currentGalleryName: action.galleryName
      };
    case GalleriesActionTypes.LOAD_GALLERY_SUCCESS:
      const gallery = state.galleryMap[action.galleryName];
      gallery.imageMap = action.galleryImageMap;
      gallery.images = action.galleryImages;
      return {
        ...state,
      };
    case GalleriesActionTypes.LOAD_GALLERIES:
      return state;
    default:
      return state;
  }
}

