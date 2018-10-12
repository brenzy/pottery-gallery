import { Component, OnInit, OnDestroy } from '@angular/core';
import { Gallery, PORTFOLIO_NAME } from '../../models/gallery';
import { GalleryImage } from '../../models/gallery-image';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GalleriesStoreActions, GalleriesStoreSelectors } from '../../root-store';

@Component({
  selector: 'gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit, OnDestroy {

  galleriesLoaded = false;

  galleryIsLoaded = false;
  gallery: Gallery;
  galleryName: string;
  imageDetails: GalleryImage;
  imageName: string;

  portfolioName = PORTFOLIO_NAME;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.imageName = routeParams.imageName;
      if (routeParams.galleryName !== this.galleryName) {
        this.galleriesLoaded = false;
        this.galleryName = routeParams.galleryName;
        this.setCurrentGallery();
      } else if (this.galleriesLoaded) {
        this.imageDetails = this.gallery.imageMap[this.imageName];
      }
    });
    this.store.pipe(select(GalleriesStoreSelectors.selectGalleriesLoaded))
      .subscribe(galleriesLoaded => this.onGalleriesLoaded(galleriesLoaded));
    this.store.pipe(select(GalleriesStoreSelectors.selectCurrentGalleryIsLoaded))
      .subscribe(galleryIsLoaded => this.onGalleryLoaded(galleryIsLoaded));
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
      this.galleryIsLoaded = true;
      this.store.pipe(select(GalleriesStoreSelectors.selectCurrentGallery))
        .subscribe(gallery => {
          if (gallery) {
            this.gallery = gallery;
            this.imageDetails = gallery.imageMap[this.imageName];
          }
        });
    }
  }

}
