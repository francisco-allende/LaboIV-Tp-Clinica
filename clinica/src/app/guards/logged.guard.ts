import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const toast = inject(ToastrService);
  const ruta = inject(Router);

  if(loginService.getLoggedUser()) {
    return true
  }

  toast.error("Necesita estar logueado para acceder al sitio");
  ruta.navigateByUrl('login');
  return  false;
};