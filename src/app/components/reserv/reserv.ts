import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Оголошуємо інтерфейс для глобального об'єкта, щоб уникнути помилок TypeScript
declare global {
  interface Window {
    bookero_config: any;
  }
}

@Component({
  selector: 'app-reserv',
  imports: [],
  templateUrl: './reserv.html',
  styleUrl: './reserv.scss',
})
export class Reserv implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    // 1. Перевіряємо, чи код виконується у браузері (важливо для SSR/SSG)
    if (isPlatformBrowser(this.platformId)) {

      // 2. Створюємо глобальний конфігураційний об'єкт bookero_config
      //    (плагін очікує знайти його у window)
      window.bookero_config = {
        id: 'pqSCCd2iS6fs',
        container: 'bookero', // Збігається з ID в HTML
        type: 'calendar',
        position: '',
        plugin_css: true,
        lang: 'pl'
      };

      // 3. Завантажуємо зовнішній скрипт, якщо він ще не завантажений
      const scriptId = 'bookero-script';
      if (!document.getElementById(scriptId)) {
        const s = document.createElement('script');
        s.id = scriptId;
        s.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';

        // Додаємо скрипт до кінця <body>
        document.body.appendChild(s);
      }
    }
  }
}
