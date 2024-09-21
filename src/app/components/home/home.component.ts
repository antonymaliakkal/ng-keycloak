import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { CommonModule } from '@angular/common';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to Waste Management System</h1>
    <!-- <button (click)="login()" *ngIf="!isLoggedIn">Login</button> -->
    <!-- <button (click)="logout()" *ngIf="isLoggedIn">Logout</button> -->
    <!-- <p *ngIf="isLoggedIn">Welcome, {{ userProfile?.username }}</p> -->
  `
})
export class HomeComponent {
  isLoggedIn = false;
  // userProfile: KeycloakProfile | null = null;

  // constructor(private keycloakService: KeycloakService) {
  //   if (this.keycloakService) { console.log('keycloak') }
  //   console.log('constructor')
  // }

  // async ngOnInit() {
  //   try {
  //     this.isLoggedIn = await this.keycloakService.isLoggedIn();
  //     if (this.isLoggedIn) {
  //       this.userProfile = await this.keycloakService.loadUserProfile();
  //     }
  //   } catch (error) {
  //     console.error('Error checking login status', error);
  //   }
  // }

  // login() {
  //   console.log('LOGGED!!!!')
  //   if (this.keycloakService) {
  //     console.log(this.keycloakService.isLoggedIn())
  //     this.keycloakService.login().then(console.log).catch(err => console.error)
  //   } else {
  //     console.error('KeycloakService is not initialized.');
  //   }
  // }

  // logout() {
  //   if (this.keycloakService) {
  //     this.keycloakService.logout();
  //   } else {
  //     console.error('KeycloakService is not initialized.');
  //   }
  // }
}
