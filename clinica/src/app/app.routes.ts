import { Routes } from '@angular/router';
import { loggedGuard } from './guards/logged.guard';
import { adminGuard } from './guards/admin.guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: "login",
        pathMatch:"full"
    },
    {
        path: 'home',
        canActivate:[loggedGuard],
        loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./views/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./views/register/register.component').then((m) => m.RegisterComponent)
    },
    {
        path: 'enviar_email',
        loadComponent: () => import('./views/enviar-email/enviar-email.component').then((m) => m.EnviarEmailComponent)
    },
    {
        path: 'usuarios',
        canActivate:[adminGuard],
        loadComponent: () => import('./views/usuarios-container/usuarios-container.component').then((m) => m.UsuariosContainerComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./views/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
    },
    {
        path: '**',
        redirectTo: 'error',
    },
];