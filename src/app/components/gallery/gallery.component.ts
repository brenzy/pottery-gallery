import { Component, OnInit, OnDestroy } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GalleriesStoreActions, GalleriesStoreSelectors } from '../../root-store';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  gallery: Gallery;
  galleryName: string;
  galleriesLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.galleryName = routeParams.galleryName;
      this.setCurrentGallery();
    });
    this.store.pipe(select(GalleriesStoreSelectors.selectGalleriesLoaded))
      .subscribe(isLoaded => this.onGalleriesLoaded(isLoaded));
    this.store.pipe(select(GalleriesStoreSelectors.selectCurrentGalleryIsLoaded))
      .subscribe(isLoaded => this.onGalleryLoaded(isLoaded));
    this.store.dispatch(new GalleriesStoreActions.LoadGalleries());
  }

  ngOnDestroy() {
    this.store.dispatch(new GalleriesStoreActions.SetCurrentGallery(null));
  }

  onGalleriesLoaded(galleriesLoaded: boolean) {
    this.galleriesLoaded = galleriesLoaded;
    this.setCurrentGallery();
  }

  setCurrentGallery() {
    if (this.galleriesLoaded) {
      this.store.dispatch(new GalleriesStoreActions.SetCurrentGallery(this.galleryName));
    }
  }

  onGalleryLoaded(galleryIsLoaded: boolean) {
    if (galleryIsLoaded) {
      this.store.pipe(select(GalleriesStoreSelectors.selectCurrentGallery))
        .subscribe(gallery => {
          if (gallery) {
            this.gallery = gallery;
          }
        });
    }
  }

}
