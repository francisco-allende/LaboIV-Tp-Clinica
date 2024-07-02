import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Route } from '@angular/router';
import { LoginService } from '../services/login.service';

export const adminOrPacienteGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UserService);
  const loginService = inject(LoginService);
  const toast = inject(ToastrService);
  const ruta = inject(Router);

  if(loginService.getLoggedUser()) {
    if(usersService.getUserRol() == "admin" || usersService.getUserRol() == "paciente") {
      return true
    }else{
      toast.error("Necesita ser admin o paciente para acceder al sitio");
      ruta.navigateByUrl("/home");
      return  false;
    }
  }else{
    toast.error("Necesita estar logueado para navegar");
    ruta.navigateByUrl("/login");
    return  false;
  }
};
