import {
  Component, OnInit, Input,
  OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';
import { Gallery, PORTFOLIO_NAME } from '../../models/gallery';

@Component({
  selector: 'gallery-menu',
  templateUrl: './gallery-menu.component.html',
  styleUrls: ['./gallery-menu.component.scss']
})
export class GalleryMenuComponent {

  @Input() previous: Gallery;
  @Input() current: Gallery;
  @Input() next: Gallery;

  portfolioName = PORTFOLIO_NAME;

  constructor() { }

}
