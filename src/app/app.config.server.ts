import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideTranslateService } from '@ngx-translate/core';
import { readFileSync } from 'fs';
import { join } from 'path';

// SSR-специфічний TranslateLoader
function provideServerTranslateLoader() {
  return {
    provide: 'TRANSLATE_LOADER',
    useFactory: () => ({
      getTranslation: (lang: string) => {
        const filePath = join(process.cwd(), 'public/assets/i18n', `${lang}.json`);
        const content = readFileSync(filePath, 'utf8');
        return Promise.resolve(JSON.parse(content));
      },
    }),
  };
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideTranslateService({
      fallbackLang: 'pl',
    }),
    provideServerTranslateLoader(),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
