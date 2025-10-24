import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
