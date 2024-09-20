import { KeycloakService } from 'keycloak-angular';

export function initalizeKeycloak(keycloak: KeycloakService) {
    // console.log("INTIALIZING>..........")
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080',
                realm: 'wastecollection',
                clientId: 'wastecollection-client'
            },
            initOptions: {
                onLoad: 'check-sso',
                // checkLoginIframe : false,
                // flow: 'standard',
                silentCheckSsoRedirectUri: 
                window.location.origin + '/assets/silent-check-sso.html' 
            }
            // bearerExcludedUrls:  []
        })
}