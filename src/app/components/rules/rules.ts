import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';

@Component({
  selector: 'app-rules-component',
  imports: [
    TranslatePipe
  ],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class RulesComponent {

  private browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);

  public scrollToAnchor(anchor: string): void {
    this.browserHelpersService.scrollTo(anchor);
  }

}
