import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor() {}

  setCookie(key: string, value: string, validationTime: number): void {
    const expirationDate = new Date();
    expirationDate.setTime(validationTime * 1000);
    const cookieValue =
      encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
    document.cookie = key + '=' + cookieValue + '; path=/';
  }

  getCookie(key: string): string | null {
    const name = key + '=';
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookies.split(';');
    for (const cookie of cookieArray) {
      let currentCookie = cookie;
      while (currentCookie.charAt(0) === ' ') {
        currentCookie = currentCookie.substring(1);
      }
      if (currentCookie.indexOf(name) === 0) {
        return currentCookie.substring(name.length, currentCookie.length);
      }
    }
    return null;
  }

  deleteCookie(key: string): void {
    this.setCookie(key, '', -1);
  }
}
