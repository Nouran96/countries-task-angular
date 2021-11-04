import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CountryData } from 'src/app/models/country.model';
import { SharedState } from 'src/app/models/shared.model';
import { LoginData } from '../../models/auth.model';
import { authReducer } from './auth/auth.reducer';
import { countriesReducer } from './countries/countries.reducer';
import { sharedReducer } from './shared/shared.reducer';

export interface State {
  auth: LoginData;
  shared: SharedState;
  countries: CountryData;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  shared: sharedReducer,
  countries: countriesReducer,
};
