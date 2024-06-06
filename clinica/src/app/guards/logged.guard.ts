import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

export const loggedGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const toast = inject(ToastrService);
  
  if(loginService.getLoggedUser()) {
    return true
  }

  toast.error("Necesita loguearse");
  return  false;
};