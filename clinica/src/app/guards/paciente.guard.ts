import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Route } from '@angular/router';
import { LoginService } from '../services/login.service';

export const pacienteGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UserService);
  const loginService = inject(LoginService);
  const toast = inject(ToastrService);
  const ruta = inject(Router);

  if(usersService.getUserRol() == "paciente") {
    return true
  }


  toast.error("Necesita ser paciente para acceder al sitio");
  ruta.navigateByUrl("/login");
  return  false;
};
