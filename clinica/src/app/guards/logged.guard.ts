import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const loggedGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);

  if(loginService.getUser()) {
    return true
  }

  console.log("Necesita loguearse");
  return  false;
};