import { Component } from '@angular/core';
import {Hero} from '@app/components/hero/hero';
import {Button} from '@app/components/button/button';

@Component({
  selector: 'app-main-page',
  imports: [
    Hero,
    Button,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
