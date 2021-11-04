import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/country`);
  }

  editCountry(data: Country): Observable<any> {
    // Copy all keys except for name key
    let { name, ...payload } = data;

    return this.http.put(`${environment.apiUrl}/country/${name}`, payload);
  }

  createCountry(data: Country): Observable<any> {
    return this.http.post(`${environment.apiUrl}/country`, data);
  }
}
