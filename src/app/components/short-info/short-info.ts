import { Component } from '@angular/core';
import {shortInfo} from '@app/nock_data/short-info';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {WavePatternComponent} from '@app/components/ui/wave-component/wave.component';

@Component({
  selector: 'app-short-info',
  imports: [
    NgOptimizedImage,
    TranslatePipe,
    WavePatternComponent
  ],
  templateUrl: './short-info.html',
  styleUrl: './short-info.scss',
})
export class ShortInfo {
  public items = shortInfo;

}
