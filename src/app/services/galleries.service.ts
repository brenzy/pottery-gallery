import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleriesService {

  constructor(private http: HttpClient) {
  }

  public getGalleries(): Observable<any> {
    return this.http.get('./assets/data/galleries.json');
  }

  public getGallery(gallery: Gallery): Observable<any> {
    return this.http.get(`./assets/data/${gallery.name}.json`);
  }

}
