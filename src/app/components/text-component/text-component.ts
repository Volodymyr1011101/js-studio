import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-text-component',
  imports: [
    TranslatePipe
  ],
  templateUrl: './text-component.html',
  styleUrl: './text-component.scss',
})
export class TextComponent {
  @Input() public textTranslateKeysArray: string[] = [];

}
