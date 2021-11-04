import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';

// export const getAllCountries = createAction('[Country] Get all Countries');
export const allCountriesRecieve = createAction(
  '[Country] All Countries Recieve',
  props<{ countries: Array<Country> }>()
);

export const getCountryDetails = createAction(
  '[Country] Get Country details',
  props<{ name: string }>()
);

// export const editCountry = createAction(
//   '[Country] Edit Country',
//   props<{ data: Country }>()
// );

// export const createCountry = createAction(
//   '[Country] Create Country',
//   props<{ data: Country }>()
// );
