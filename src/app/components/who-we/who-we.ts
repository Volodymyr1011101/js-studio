import { Component } from '@angular/core';
import {
  ComponentWithLineInTitleComponent
} from '@app/components/ui/component-with-line-in-title/component-with-line-in-title.component';
import {NgOptimizedImage} from '@angular/common';
import {TextComponent} from '@app/components/text-component/text-component';

@Component({
  selector: 'app-who-we',
  imports: [
    ComponentWithLineInTitleComponent, NgOptimizedImage, TextComponent
  ],
  templateUrl: './who-we.html',
  styleUrl: './who-we.scss',
})
export class WhoWe {

}
