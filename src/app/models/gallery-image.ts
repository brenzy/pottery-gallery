export interface GalleryImage {
  name?: string;
  image: string;
  thumbnail: string;
  shortDescription: string;
  newRow: boolean;
  next?: GalleryImage;
  previous?: GalleryImage;
}
