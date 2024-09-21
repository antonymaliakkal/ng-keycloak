import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WasteBinListComponent } from './components/waste-bin-list/waste-bin-list.component';
// import { AuthGuard } from './guards/auth.guard'

export const routes: Routes = [
    { path:'home' , component: HomeComponent},
    { 
        path: 'wastebins',
        component : WasteBinListComponent,
        // loadComponent: () => import('./components/waste-bin-list/waste-bin-list.component').then(m => m.WasteBinListComponent),
        // canActivate: [AuthGuard],  // Add this line to apply the guard to this route only
        // data : { roles: ['ADMIN'] }
     }
];
