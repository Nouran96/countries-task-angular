import { createAction, props } from '@ngrx/store';
import { LoginData } from '../../models/auth.model';

export const loginDataRecieve = createAction(
  '[Auth] Login Data Recieve',
  props<LoginData>()
);

export const logout = createAction('[Auth] Logout');
