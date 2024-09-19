import { ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { inject } from '@angular/core'
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const AuthGuard = (route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Promise<boolean | UrlTree> => { 
  
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  return new Promise((resolve, reject) => {
  if(!keycloak.isLoggedIn()) {
    keycloak.login({
      redirectUri: window.location.origin + state.url,
    });
    return;
  }

  const requiredRoles = route.data['roles'];
   if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) { 
      resolve(true);
   } else { 
      const hasRequiredRoles = requiredRoles.every((role) => keycloak.isUserInRole(role));
      resolve(hasRequiredRoles ? true : router.parseUrl('/')); 
  }

  });

};