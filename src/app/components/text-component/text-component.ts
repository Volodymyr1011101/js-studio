import { Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-text-component',
  standalone: true, // Рекомендовано для нових версій Angular
  imports: [
    TranslatePipe,
    NgTemplateOutlet
  ],
  templateUrl: './text-component.html',
  styleUrl: './text-component.scss',
})

export class TextComponent {
  @Input() public textTranslateKeysArray: string[] = [];
  @Input() public additionalText: string[] = [];
  @Input() public list: string[] = [];
  @Input() public type: 'regular' | 'with-list' = 'regular';
}
