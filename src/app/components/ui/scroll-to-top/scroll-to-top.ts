import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';

@Component({
  selector: 'app-scroll-to-top',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop {
  private browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);

  public scrollToTop(): void {
    this.browserHelpersService.scrollToTop();
  }
}
