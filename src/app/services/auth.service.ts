import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthData } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(payload: AuthData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/cognito-register`, payload);
  }

  loginUser(payload: AuthData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/cognito-login`, payload).pipe(
      catchError((error) => {
        return of({ error: true, message: error.error.message });
      })
    );
  }
}
