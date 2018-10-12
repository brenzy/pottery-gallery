export const PORTFOLIO_NAME = 'portfolio';
import { GalleryImage } from './gallery-image';

export interface Gallery {
  name: string;
  directory: string;
  thumbnail: string;
  description: string;
  details?: string;
  newRow: boolean;
  next?: Gallery;
  previous?: Gallery;
  imageMap?: Map<string, GalleryImage>;
  firstImage: GalleryImage;
  images: GalleryImage[];
}
