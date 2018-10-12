import { GalleriesStoreModule } from './galleries-store.module';

describe('GalleryListStoreModule', () => {
  let galleriesStoreModule: GalleriesStoreModule;

  beforeEach(() => {
    galleriesStoreModule = new GalleriesStoreModule();
  });

  it('should create an instance', () => {
    expect(GalleriesStoreModule).toBeTruthy();
  });
});
