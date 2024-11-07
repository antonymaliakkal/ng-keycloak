import { ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({

  providedIn: 'root'

})

export class AuthGuard extends KeycloakAuthGuard {
  
  constructor(
    
    protected override readonly router: Router,

    protected readonly keycloak: KeycloakService
  ) 
  {
    console.log('AUTH GUARD MAIN')
    super(router,keycloak);
  } 
  
  public override async isAccessAllowed(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 

  ): Promise<boolean | UrlTree>  {

    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      console.log('AUTH GUARD 1')
      await this.keycloak.login({ redirectUri: window.location.origin + state.url, });

    }

    console.log('AUTH GUARD 2')
    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      console.log('AUTH GUARD 3')
      return true;
    }
    console.log('AUTH GUARD 4')
    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }

}