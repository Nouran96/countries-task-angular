import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { LoginData } from '../../models/auth.model';
import { authReducer } from './auth/auth.reducer';

export interface State {
  auth: LoginData;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
};
