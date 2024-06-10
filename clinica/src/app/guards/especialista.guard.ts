import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

export const especialistaGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UserService);
  const loginService = inject(LoginService);
  const toast = inject(ToastrService);
  const ruta = inject(Router);

  if(usersService.getUserRol() == "especialista") {
    return true
  }

  toast.error("Necesita ser especialista para acceder al sitio");
  return  false;
};