import { Component } from '@angular/core';
import {Hero} from '@app/components/hero/hero';
import {ShortInfo} from '@app/components/short-info/short-info';
import {Gallery} from '@app/components/gallery/gallery';
import {TextComponent} from '@app/components/text-component/text-component';

@Component({
  selector: 'app-main-page',
  imports: [
    Hero,
    ShortInfo,
    Gallery,
    TextComponent,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  public mainText: string[] = [
    'first-text-first-paragraph',
    'first-text-second-paragraph',
    'first-text-third-paragraph',
    'first-text-fourth-paragraph',
  ]
}
