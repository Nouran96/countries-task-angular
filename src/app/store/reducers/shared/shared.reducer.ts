import { createReducer, on } from '@ngrx/store';
import { SharedState } from 'src/app/models/shared.model';
import { toggleSnackbar } from '../../actions/shared.actions';

export const initialState: SharedState = {
  openSnackbar: false,
  message: '',
};

export const sharedReducer = createReducer(
  initialState,
  on(toggleSnackbar, (state, { open, message }) => ({
    ...state,
    openSnackbar: open,
    message,
  }))
);
