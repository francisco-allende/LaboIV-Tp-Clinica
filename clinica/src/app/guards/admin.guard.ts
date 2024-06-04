import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const toast = inject(ToastrService);

  if(loginService.getUserRol() == "admin") {
    return true
  }

  toast.error("Necesita ser administrador para acceder al sitio");
  return  false;
};