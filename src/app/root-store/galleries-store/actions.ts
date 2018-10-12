import {Action} from '@ngrx/store';
import {Gallery} from '../../models/gallery';
import {GalleryImage} from '../../models/gallery-image';

export enum GalleriesActionTypes {
  LOAD_GALLERIES = '[Galleries] Load',
  LOAD_GALLERIES_SUCCESS = '[Galleries] Load Success',
  SET_CURRENT_GALLERY = '[Galleries] Set Current Gallery',
  LOAD_GALLERY_SUCCESS = '[Galleries] Load Gallery Success'
}

export class LoadGalleries implements Action {
  readonly type = GalleriesActionTypes.LOAD_GALLERIES;
}

export class LoadGalleriesSuccess implements Action {
  readonly type = GalleriesActionTypes.LOAD_GALLERIES_SUCCESS;
  constructor(
    public galleries: Gallery[],
    public galleryMap: Map<string, Gallery>) {}
}

export class SetCurrentGallery implements Action {
  readonly type = GalleriesActionTypes.SET_CURRENT_GALLERY;
  constructor(public galleryName: string) {}
}

export class LoadGallerySuccess implements Action {
  readonly type = GalleriesActionTypes.LOAD_GALLERY_SUCCESS;
  constructor(
    public galleryName: string,
    public galleryImages: GalleryImage[],
    public galleryImageMap: Map<string, GalleryImage>) {}
}

export type GalleriesActionsUnion =
  LoadGalleries |
  LoadGalleriesSuccess |
  SetCurrentGallery |
  LoadGallerySuccess;
