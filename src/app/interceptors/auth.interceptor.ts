import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCookie } from '../store/reducers/auth/auth.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = getCookie('token');

    if (token) {
      const authReq = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
