import { Component } from '@angular/core';
import {ParticleEffectComponent} from "@app/components/particle-effect/particle-effect";
import { KontaktComponent } from '@app/components/kontakt-component/kontakt';

@Component({
  selector: 'app-kontakt-component-page',
  imports: [
    KontaktComponent
  ],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class KontaktPage {

}
