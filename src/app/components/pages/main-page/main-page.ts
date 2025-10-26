import { Component } from '@angular/core';
import {Hero} from '@app/components/hero/hero';
import {Button} from '@app/components/button/button';
import {ShortInfo} from '@app/components/short-info/short-info';
import {Gallery} from '@app/components/gallery/gallery';

@Component({
  selector: 'app-main-page',
  imports: [
    Hero,
    Button,
    ShortInfo,
    Gallery,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
