import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TextComponent} from '@app/components/text-component/text-component';
import {Gallery} from '@app/components/gallery/gallery';
import {images} from '@app/nock_data/gallery-items';
import {GalleryItem} from '../../../types';

@Component({
  selector: 'app-why-we',
  imports: [
    TranslatePipe,
    TextComponent,
    Gallery
  ],
  templateUrl: './why-we.html',
  styleUrl: './why-we.scss',
})
export class WhyWe {
  public mainText: string[] = [
    'first-text-first-paragraph',
    'first-text-second-paragraph',
    'first-text-third-paragraph',
  ]

  public name: string = 'JS Studio';
  public images: GalleryItem[] = [];

  ngOnInit() {
    this.images = images;
  }

}
