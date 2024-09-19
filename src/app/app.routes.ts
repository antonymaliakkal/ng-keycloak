import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WasteBinListComponent } from './components/waste-bin-list/waste-bin-list.component';
import { AuthGuard } from './guards/auth.guard'

export const routes: Routes = [
    { path:'' , component: HomeComponent},
    { 
        path: 'waste-bins',
        component : WasteBinListComponent,
        canActivate: [AuthGuard],  // Add this line to apply the guard to this route only
        data : { roles: ['ADMIN'] }
     }
];
