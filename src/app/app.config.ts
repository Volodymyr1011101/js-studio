import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideTranslateService, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimations} from '@angular/platform-browser/animations';
import {firstValueFrom} from 'rxjs';

// Функція, яка завантажує переклад до старту додатку
export function initializeTranslations(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('pl');

    // firstValueFrom перетворює Observable від translate.use() на Promise
    return firstValueFrom(translate.use('pl'));
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideTranslateService({
      fallbackLang: 'pl',
      loader: provideTranslateHttpLoader({
        prefix:"assets/i18n/",
        suffix:".json"
      }),
    }),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslations,
      deps: [TranslateService],
      multi: true
    }
  ]
};
