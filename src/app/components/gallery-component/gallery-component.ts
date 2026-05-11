import { Component } from '@angular/core';
import {ComponentWithLineInTitleComponent} from "@app/components/ui/component-with-line-in-title/component-with-line-in-title.component";
import {Gallery} from '@app/components/gallery/gallery';
import {images} from '@app/nock_data/gallery-items';
import {WavePatternComponent} from '@app/components/ui/wave-component/wave.component';

@Component({
  selector: 'app-gallery-component',
  imports: [
    ComponentWithLineInTitleComponent,
    Gallery,
    WavePatternComponent,
  ],
  templateUrl: './gallery-component.html',
  styleUrl: './gallery-component.scss',
})
export class GalleryComponent {

  protected readonly images = images;
}
