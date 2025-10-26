import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-rules-component',
  imports: [
    TranslatePipe
  ],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class RulesComponent {

}
