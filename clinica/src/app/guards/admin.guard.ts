import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Route } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UsersService);
  const toast = inject(ToastrService);
  const ruta = inject(Router);

  if(usersService.getUserRol() == "admin") {
    return true
  }

  toast.error("Necesita ser admin para acceder al sitio");
  ruta.navigateByUrl("/home");
  return  false;
};