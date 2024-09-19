import { KeycloakService } from 'keycloak-angular';

export function initalizeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080/auth',
                realm: 'wastecollection',
                clientId: 'wastecollection-client'
            },
            initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: 
                window.location.origin + '/assets/silent-check-sso.html'
            }
        })
}