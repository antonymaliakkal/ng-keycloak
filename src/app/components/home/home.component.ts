import { Component,OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { NgIf} from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    
  isLoggedIn = false;

  constructor(private keycloackService: KeycloakService) { }

  async ngOnInit() { 
    this.isLoggedIn = await this.keycloackService.isLoggedIn();
   }

  login() {
    this.keycloackService.login();
  } 

  logout() {
    this.keycloackService.logout();
  }


}
