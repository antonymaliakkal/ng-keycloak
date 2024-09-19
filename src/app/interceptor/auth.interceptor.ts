import { HttpHandlerFn,HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export function authInterceptor(req: HttpRequest<unknown> , next: HttpHandlerFn) {

  const keycloak = inject(KeycloakService);

if(keycloak.isLoggedIn()) {
  const authToken = keycloak.getToken();
  
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

}
   return next(req);
}