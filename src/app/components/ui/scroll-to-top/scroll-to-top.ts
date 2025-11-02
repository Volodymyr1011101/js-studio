import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import {BehaviorSubject, takeUntil} from 'rxjs';
import {BaseComponent} from '@app/components/base-component';

@Component({
  selector: 'app-scroll-to-top',
  imports: [
    NgOptimizedImage,
    AsyncPipe
  ],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop extends BaseComponent implements OnInit {

  public isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private browserHelpersService: BrowserHelpersService = inject(BrowserHelpersService);

  public ngOnInit(): void {
    this.browserHelpersService.scrollPosition$.subscribe((position) => {
      takeUntil(this.dispose$)
      if (position < 300) {
        this.isVisible$.next(true);
      } else {
        this.isVisible$.next(false);
      }
    })
  }

  public scrollToTop(): void {
    this.browserHelpersService.scrollToTop();
  }
}
