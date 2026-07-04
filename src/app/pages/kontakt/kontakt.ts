import { Component } from '@angular/core';
import {ParticleEffectComponent} from "@app/components/particle-effect/particle-effect";
import { KontaktComponent } from '@app/components/kontakt-component/kontakt';
import {DynamicRenderItem} from '@app/components/dynamic-render-item/dynamic-render-item';
import {Map} from '@app/components/map/map';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-kontakt-component-page',
  imports: [
    KontaktComponent,
    Map,
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class KontaktPage {

}
