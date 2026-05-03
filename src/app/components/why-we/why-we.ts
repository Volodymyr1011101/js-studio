import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TextComponent} from '@app/components/text-component/text-component';

@Component({
  selector: 'app-why-we',
  imports: [
    TranslatePipe,
    TextComponent
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
}
