import { Routes } from '@angular/router';
import { loggedGuard } from './guards/logged.guard';
import { adminGuard } from './guards/admin.guard';
import { pacienteGuard } from './guards/paciente.guard';
import { especialistaGuard } from './guards/especialista.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "login",
        pathMatch:"full"
    },
    {
        path: 'home',
        //canActivate:[loggedGuard],
        loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent),
        data: { animation: 'Page1' }
    },
    {
        path: 'login',
        loadComponent: () => import('./views/login/login.component').then((m) => m.LoginComponent),
        data: { animation: 'Page1' }
    },
    {
        path: 'register',
        loadComponent: () => import('./views/register/register.component').then((m) => m.RegisterComponent),
        data: { animation: 'Page2' }
    },
    {
        path: 'enviar_email',
        loadComponent: () => import('./views/enviar-email/enviar-email.component').then((m) => m.EnviarEmailComponent),
        data: { animation: 'Page2' }
    },
    {
        path: 'usuarios',
        //canActivate:[adminGuard],
        loadComponent: () => import('./views/usuarios-container/usuarios-container.component').then((m) => m.UsuariosContainerComponent),
        data: { animation: 'Page1' }
    },
    {
        path: 'turnos/solicitar',
        //canActivate:[especialistaGuard || pacienteGuard],
        loadComponent: () => import('./views/solicitar-turno-container/solicitar-turno-container.component').then((m) => m.SolicitarTurnoContainerComponent),
        data: { animation: 'Page2' }
    },
    {
        path: 'turnos/listar_turnos',
        //canActivate:[adminGuard],
        loadComponent: () => import('./views/turnos-container/turnos-container.component').then((m) => m.TurnosContainerComponent)
    },
    {
        path: 'turnos/mis_turnos',
        //canActivate:[especialistaGuard || pacienteGuard],
        loadComponent: () => import('./views/mis-turnos-container/mis-turnos-container.component').then((m) => m.MisTurnosContainerComponent),
        data: { animation: 'Page2' }
    },
    {
        path: 'mi_perfil',
        //canActivate:[loginGuard],
        loadComponent: () => import('./views/perfil-container/perfil-container.component').then((m) => m.PerfilContainerComponent),
        data: { animation: 'Page1' }
    },
    {
        path: 'pacientes',
        //canActivate:[especialistaGuard],
        loadComponent: () => import('./views/pacientes-container/pacientes-container.component').then((m) => m.PacientesContainerComponent),
        data: { animation: 'Page1' }
    },
    {
        path: 'error',
        loadComponent: () => import('./views/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent),
        data: { animation: 'Page2' }
    },
    {
        path: '**',
        redirectTo: 'error',
    },
];