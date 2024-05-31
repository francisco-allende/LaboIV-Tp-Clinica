import { Routes } from '@angular/router';
import { loggedGuard } from './guards/logged.guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: "login",
        pathMatch:"full"
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
    },
    {
        path: '**',
        redirectTo: 'error',
    },
];