import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Header} from './components/header/header';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';
import {ScrollToTop} from '@app/components/ui/scroll-to-top/scroll-to-top';
import {Footer} from '@app/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Header, ScrollToTop, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '[class.app-ready]': 'isTranslated()' // додаємо клас, коли переклад готовий
  }
})
export class App {
  private translate = inject(TranslateService);
  isTranslated = signal(false);

  constructor() {
    // Чекаємо першого завантаження перекладів для прикриття ключиків
    this.translate.get('EQUIPMENT_TYPES').subscribe(() => {
      this.isTranslated.set(true);
    });
  }
}
