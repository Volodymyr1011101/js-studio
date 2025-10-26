import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideTranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimations} from '@angular/platform-browser/animations';
import {GALLERY_CONFIG, GalleryConfig} from 'ng-gallery';

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
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    },
    provideAnimations(),
  ]
};
