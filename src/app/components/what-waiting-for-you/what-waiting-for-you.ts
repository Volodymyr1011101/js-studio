import { Component } from '@angular/core';
import {ComponentWithLineInTitleComponent} from '@app/components/ui/component-with-line-in-title/component-with-line-in-title.component';
import {WindowOpenedComponent} from '@app/components/window-opened-component/window-opened-component';
import {waitData} from '@app/nock_data/data';
import {Button} from '@app/components/button/button';
import {WavePatternComponent} from '@app/components/ui/wave-component/wave.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-what-waiting-for-you',
  imports: [
    ComponentWithLineInTitleComponent,
    WindowOpenedComponent,
    Button,
    WavePatternComponent,
    TranslatePipe
  ],
  templateUrl: './what-waiting-for-you.html',
  styleUrl: './what-waiting-for-you.scss',
})
export class WhatWaitingForYou {
  public waitData = waitData;
}
