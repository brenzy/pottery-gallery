import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleryMenuComponent } from './components//gallery-menu/gallery-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RootStoreModule } from './root-store';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleriesComponent,
    GalleryMenuComponent,
    GalleryComponent,
    GalleryImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
