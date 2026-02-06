import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() public type: 'large' | 'middle' | 'small' =  'middle';
  @Input() public navigatePath: string = '/';
}
