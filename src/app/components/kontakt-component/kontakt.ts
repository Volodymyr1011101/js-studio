import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-kontakt-component',
  imports: [
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class KontaktComponent {

}
