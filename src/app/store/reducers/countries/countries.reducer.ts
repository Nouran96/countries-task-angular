import { createReducer, on } from '@ngrx/store';
import { CountryData } from 'src/app/models/country.model';
import {
  allCountriesRecieve,
  getCountryDetails,
} from '../../actions/countries.actions';

export const initialState: CountryData = { countries: [], selectedCountry: {} };

export const countriesReducer = createReducer(
  initialState,
  on(allCountriesRecieve, (state, { countries }) => {
    return {
      ...state,
      countries,
    };
  }),
  on(getCountryDetails, (state, { name }) => {
    return {
      ...state,
      selectedCountry:
        state.countries.find((country) => country.name === name) || {},
    };
  })
);
