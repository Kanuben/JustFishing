import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice = true;

  if(authservice)
  return true;

  return router.parseUrl('/login')
};
