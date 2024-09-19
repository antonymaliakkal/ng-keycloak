import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptor/auth.interceptor';
import { importProvidersFrom } from '@angular/core';
import { KeycloakAngularModule } from 'keycloak-angular';
import { KeycloakService } from 'keycloak-angular/public_api';
import { initalizeKeycloak } from './app/init/keycloak-init.factory';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(KeycloakAngularModule),
    {
      provide : KeycloakService,
      useValue : new KeycloakService()
    },
    {
      provide: 'KEYCLOAK_SERVICE',
      useFactory : initalizeKeycloak,
      multi : true,
      deps : [KeycloakService],
    }
  ]
})
  .catch((err) => console.error(err));