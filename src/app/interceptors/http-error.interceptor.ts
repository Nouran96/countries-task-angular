import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { logout } from '../store/actions/auth.actions';
import { Router } from '@angular/router';
import { toggleSnackbar } from '../store/actions/shared.actions';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          this.store.dispatch(logout());
          this.router.navigateByUrl('/login');
        }

        if (error && error.status === 404) {
          this.router.navigateByUrl('/');
        }

        this.store.dispatch(
          toggleSnackbar({ open: true, message: error.error.message })
        );

        return throwError(error.error.message);
      })
    );
  }
}
