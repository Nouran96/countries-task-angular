import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { SharedState } from 'src/app/models/shared.model';
import { LoginData } from '../../models/auth.model';
import { authReducer } from './auth/auth.reducer';
import { sharedReducer } from './shared/shared.reducer';

export interface State {
  auth: LoginData;
  shared: SharedState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  shared: sharedReducer,
};
