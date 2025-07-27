import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';
export const authGuard = () => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  if (cookieService.getCookie(window?.location.hostname)) {
    return true;
  }
  // Redirect to the login page
  return router.parseUrl('/auth/login');
};
