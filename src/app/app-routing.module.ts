import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';

const routes: Routes = [
  { path: '', component: GalleriesComponent },
  { path: ':galleryName', component: GalleryComponent},
  { path: ':galleryName/:imageName', component: GalleryImageComponent },
  { path: '**', component: GalleriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
