import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-kontakt',
  imports: [
    TranslatePipe
  ],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class Kontakt {

}
