import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';

export const allCountriesRecieve = createAction(
  '[Country] All Countries Recieve',
  props<{ countries: Array<Country> }>()
);
