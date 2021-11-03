import { createReducer, on } from '@ngrx/store';
import { loginDataRecieve, logout } from 'src/app/store/actions/auth.actions';
import { LoginData } from 'src/app/models/auth.model';

export const getCookie = (c_name: string) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }

  return null;
};

export const initialState: LoginData = { token: getCookie('token') };

export const authReducer = createReducer(
  initialState,
  on(loginDataRecieve, (state, { token }) => {
    // Set a cookie that expires when session finishes
    const authCookie = `token=${token};`;
    document.cookie = authCookie;

    return { token };
  }),
  on(logout, (state) => {
    // Set a cookie that expires when session finishes
    const authCookie = `token=;`;
    document.cookie = authCookie;

    return { token: null };
  })
);
