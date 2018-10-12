import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GalleriesStoreActions, GalleriesStoreSelectors } from '../../root-store';

@Component({
  selector: 'gallery-portfolio',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})

export class GalleriesComponent implements OnInit {

  galleries$: Observable<Gallery[]>;
  portfolioName = 'PORTFOLIO';
  previousGallery: Gallery = null;
  nextGallery: Gallery = null;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.galleries$ = this.store.pipe(select(GalleriesStoreSelectors.selectGalleries));
    this.galleries$.subscribe(galleries => this.onGalleriesLoaded(galleries));
    this.store.dispatch(new GalleriesStoreActions.LoadGalleries());
  }

  onGalleriesLoaded(galleries) {
    if (galleries && galleries.length) {
      this.nextGallery  = galleries[0];
      this.previousGallery = galleries[galleries.length - 1];
    }
  }
}
