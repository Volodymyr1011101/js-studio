// screen-resize.service.ts
import { HostListener, inject, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, fromEvent, Observable, shareReplay, throttleTime} from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import {isPlatformBrowser, ViewportScroller, DOCUMENT} from '@angular/common';

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
  public scrollPosition$: Observable<number> = new BehaviorSubject<number>(0);

  private viewportScroller: ViewportScroller = inject(ViewportScroller);

  constructor(@Inject(PLATFORM_ID) private platformId: string, @Inject(DOCUMENT) private document: Document ) {
    if (this.isBrowser()) {
      this.resizeSubscribe();
      this.scrollSubscribe();
    }
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

  private resizeSubscribe(): void {
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

  private scrollSubscribe(): void {
    this.scrollPosition$ = fromEvent(window, 'scroll').pipe(
      // Оптимізація: беремо подію не частіше, ніж кожні 15ms
      throttleTime(15, undefined, { leading: true, trailing: true }),

      // Перетворюємо подію (event) на число (позицію скролу)
      map(() => window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0),

      // Видаємо лише унікальні значення (щоб не "спамити" однаковими)
      distinctUntilChanged(),

      // Видаємо початкове значення 0 при підписці
      startWith(0),

      // Кешуємо останнє значення для нових підписників
      shareReplay(1)
    );
  }

}
