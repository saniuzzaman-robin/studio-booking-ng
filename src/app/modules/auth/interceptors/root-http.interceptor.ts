import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Injectable()
export class RootHttpInterceptor implements HttpInterceptor {
  constructor(
    private _cookieService: CookieService,
    private _progressbarService: ProgressBarService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._progressbarService.executingNetworkCall.next(true);
    const clonedRequest = request.clone({
      setHeaders: {
        'X-Jwt-Token':
          'Bearer ' + this._cookieService.getCookie(window?.location.hostname),
      },
    });
    return next
      .handle(clonedRequest)
      .pipe(
        finalize(() =>
          this._progressbarService.executingNetworkCall.next(false)
        )
      );
  }
}
