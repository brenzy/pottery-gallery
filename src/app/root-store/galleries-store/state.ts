import { Gallery } from 'src/app/models/gallery';

export interface State {
  isLoaded: boolean;
  galleries: Gallery[];
  galleryMap: Map<string, Gallery>;
  currentGalleryName: string;
}

export const initialState: State = {
  isLoaded: false,
  galleries: [],
  galleryMap: null,
  currentGalleryName: null
};
