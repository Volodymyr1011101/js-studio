import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-window-opened-component',
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    NgTemplateOutlet
  ],
  templateUrl: './window-opened-component.html',
  styleUrl: './window-opened-component.scss',
})
export class WindowOpenedComponent {
  @Input() public topImageUrl: string = '';
  @Input() public bottomImageUrl: string = '';
  @Input() public backgroundImageUrl: string = '';
  @Input() public description: string = '';
  @Input() public mainLabel: string = '';
  @Input() public type: 'bottom' | 'side' = 'bottom';
}
