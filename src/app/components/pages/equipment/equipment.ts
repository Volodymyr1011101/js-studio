import { Component } from '@angular/core';
import {ParticleEffectComponent} from '@app/components/particle-effect/particle-effect';

@Component({
  selector: 'app-equipment',
  imports: [
    ParticleEffectComponent
  ],
  templateUrl: './equipment.html',
  styleUrl: './equipment.scss',
})
export class Equipment {
  public inProgress = true;
}
