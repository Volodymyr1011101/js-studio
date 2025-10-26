import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  imports: [
    TranslatePipe
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() public type: 'large' | 'middle' | 'small' =  'middle';

}
