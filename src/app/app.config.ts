import { ApplicationConfig, importProvidersFrom , APP_INITIALIZER } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { initalizeKeycloak } from './init/keycloak-init.factory';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './interceptor/auth.interceptor';



export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),
    KeycloakService,
    // importProvidersFrom(KeycloakAngularModule),
    // {
    //   provide: KeycloakService,
    //   useClass: KeycloakService
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: initalizeKeycloak,
      multi: true,
      deps: [KeycloakService]

    }

    // provideHttpClient(withInterceptors([authInterceptor]))

  ]

};