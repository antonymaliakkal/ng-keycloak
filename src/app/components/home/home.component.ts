import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { CommonModule } from '@angular/common';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  userProfile: KeycloakProfile | null = null;

  constructor(private keycloakService: KeycloakService) {
    if (this.keycloakService) { 
      console.log('keycloak') 
    }
    console.log('constructor')
  }

  async ngOnInit() {
    try {
      this.isLoggedIn = await this.keycloakService.isLoggedIn();
      if (this.isLoggedIn) {
        this.userProfile = await this.keycloakService.loadUserProfile();
        console.log(this.userProfile);
      }
    } catch (error) {
      console.error('Error checking login status', error);
    }

    if(this.isLoggedIn) {
      console.log('logged in')
      console.log(this.keycloakService)
      console.log(this.keycloakService.getUserRoles())
      console.log('Token Home : ' , (await this.keycloakService.getToken()))
      console.log((await this.keycloakService.loadUserProfile()).username)
    }
  }



  login() {
    console.log('LOGGED!!!!')
    if (this.keycloakService) {
      // console.log(this.keycloakService.isLoggedIn())
      this.keycloakService.login().then(console.log).catch(err => console.error)
      // console.log(this.userProfile);
    } else {
      console.error('KeycloakService is not initialized.');
    }

  }

  logout() {
    console.log('logged out')
    console.log(this.keycloakService)
    console.log(this.userProfile)
    if (this.keycloakService) {
      this.keycloakService.logout();
    } else {
      console.error('KeycloakService is not initialized.');
    }
  }
}
