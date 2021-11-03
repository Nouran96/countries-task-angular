import { createAction, props } from '@ngrx/store';
import { AuthData, LoginData } from '../../models/auth.model';

export const registerUser = createAction(
  '[Auth] Register User',
  props<AuthData>()
);

export const loginUser = createAction('[Auth] Login User', props<AuthData>());

export const loginDataRecieve = createAction(
  '[Auth] Login Data Recieve',
  props<LoginData>()
);
