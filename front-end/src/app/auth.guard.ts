import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  console.log("I like big bass and I cannot lie")
  const authservice = false;

  if(authservice)
  return true;

  return router.parseUrl('/login')
};
