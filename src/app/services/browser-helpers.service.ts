// screen-resize.service.ts
import {HostListener, inject, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import {isPlatformBrowser, ViewportScroller} from '@angular/common';

interface ScreenSize {
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class BrowserHelpersService {
  public screen$: Observable<ScreenSize> | null = null;
  public isMenuOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private viewportScroller: ViewportScroller = inject(ViewportScroller);

  constructor(@Inject(PLATFORM_ID) private platformId: string ) {
    if (this.isBrowser()) {
      this.screen$ = fromEvent(window, 'resize').pipe(
        // 1. Починаємо з поточного розміру, щоб потік мав початкове значення
        startWith(null),
        // 2. Обмежуємо частоту спрацювання, щоб уникнути проблем з продуктивністю
        debounceTime(100),
        // 3. Перетворюємо подію на об'єкт з розмірами
        map(() => ({
          width: window.innerWidth,
          height: window.innerHeight
        }))
      );
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

  }

  public toggleMenu(state: boolean): void {
    this.isMenuOpened$.next(state);
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public scrollTo(target: string): void {
    this.viewportScroller.scrollToAnchor(target);
  }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
