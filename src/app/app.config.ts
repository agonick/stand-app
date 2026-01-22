import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // providers sono i servizi globali dell'applicazione
  providers: [
    provideBrowserGlobalErrorListeners(),
    // fornisce il router all'applicazione con le rotte definite in app.routes.ts
    provideRouter(routes),
    provideHttpClient()
  ]
};
