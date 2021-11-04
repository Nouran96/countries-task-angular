import { createReducer, on } from '@ngrx/store';
import { CountryData } from 'src/app/models/country.model';
import { allCountriesRecieve } from '../../actions/countries.actions';

export const initialState: CountryData = { countries: [] };

export const countriesReducer = createReducer(
  initialState,
  on(allCountriesRecieve, (state, { countries }) => {
    return {
      ...state,
      countries,
    };
  })
);
