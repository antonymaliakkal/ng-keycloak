import { ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

// export const AuthGuard = (route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Promise<boolean | UrlTree> => { 
  
//   const keycloak = inject(KeycloakService);
//   const router = inject(Router);

//   return new Promise((resolve, reject) => {
//   if(!keycloak.isLoggedIn()) {
//     keycloak.login({
//       redirectUri: window.location.origin + state.url,
//     });
//     return;
//   }

//   const requiredRoles = route.data['roles'];  
//    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) { 
//       resolve(true);
//    } else { 
//       const hasRequiredRoles = requiredRoles.every((role) => keycloak.isUserInRole(role));
//       resolve(hasRequiredRoles ? true : router.parseUrl('/')); 
//   }

//   });

// };  


@Injectable({

  providedIn: 'root'

})

export class AuthGuard extends KeycloakAuthGuard {
  
  constructor(
    
    protected override readonly router: Router,

    protected readonly keycloak: KeycloakService
  ) 
  {
    super(router,keycloak);
  } 
  
  public override async isAccessAllowed(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 

  ): Promise<boolean | UrlTree>  {

    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({ redirectUri: window.location.origin + state.url, });

    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }

}