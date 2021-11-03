import { createReducer, on } from '@ngrx/store';
import { loginDataRecieve } from 'src/app/store/actions/auth.actions';
import { LoginData } from 'src/app/models/auth.model';

export const initialState: LoginData = { token: null };

export const authReducer = createReducer(
  initialState,
  on(loginDataRecieve, (state, { token }) => ({ token }))
);
