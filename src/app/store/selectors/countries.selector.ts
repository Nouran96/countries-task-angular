import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryData } from 'src/app/models/country.model';

export const selectCountries = createFeatureSelector<CountryData>('countries');

export const selectSelectedCountry =
  createFeatureSelector<CountryData>('selectedCountry');
