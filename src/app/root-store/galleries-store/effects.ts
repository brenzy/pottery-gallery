import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { GalleriesActionTypes, LoadGalleriesSuccess, LoadGallerySuccess } from './actions';
import { State } from './state';
import { Gallery } from '../../models/gallery';
import { GalleryImage } from '../../models/gallery-image';
import { Observable } from 'rxjs';
import { withLatestFrom, filter, map, switchMap } from 'rxjs/operators';
import { GalleriesService } from '../../services/galleries.service';
import { selectGalleriesLoaded, selectCurrentGallery } from './selectors';

@Injectable()
export class GalleriesEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private service: GalleriesService
  ) { }

  @Effect()
  loadGalleries$: Observable<Action> = this.actions$.pipe(
    ofType(GalleriesActionTypes.LOAD_GALLERIES),
    withLatestFrom(this.store$.pipe(select(selectGalleriesLoaded))),
    filter(([action, isLoaded]) => {
      return !isLoaded;
    }), // only continue if hasLoaded is false
    switchMap(() =>
      this.service.getGalleries().pipe(
        map((galleries: Gallery[]) => {
          // Initialize the gallery links and gallery map
          const galleryMap = new Map<string, Gallery>();
          const numGalleries = galleries.length;
          galleries.forEach((gallery, index) => {
            galleryMap[gallery.name] = gallery;
            gallery.next = (index === numGalleries - 1) ? null : galleries[index + 1];
            gallery.previous = (index === 0) ? null : galleries[index - 1];
          });
          return new LoadGalleriesSuccess(galleries, galleryMap);
        })
      )
    )
  );

  @Effect()
  loadCurrentGallery$: Observable<Action> = this.actions$.pipe(
    ofType(GalleriesActionTypes.SET_CURRENT_GALLERY),
    withLatestFrom(this.store$.pipe(select(selectCurrentGallery))),
    filter(([action, currentGallery]) => {
      return currentGallery !== null;
    }), // only continue if currentGallery is not null
    switchMap(([action, currentGallery]) =>
      this.service.getGallery(currentGallery).pipe(
        map((galleryImages: GalleryImage[]) => {
          // Initialize the imageMap for the gallery
          const galleryImageMap = new Map<string, GalleryImage>();
          const numImages = galleryImages.length;
          galleryImages.forEach((galleryImage, index) => {
            if (!galleryImage.name) {
              galleryImage.name = galleryImage.image.split('.')[0].split('/').pop();
            }
            galleryImage.next = (index === numImages - 1) ? galleryImages[0] : galleryImages[index + 1];
            galleryImage.previous = (index === 0) ? galleryImages[numImages - 1] : galleryImages[index - 1];
            galleryImageMap[galleryImage.name] = galleryImage;
          });
          return new LoadGallerySuccess(currentGallery.name, galleryImages, galleryImageMap);
        })
      )
    )
  );
}
