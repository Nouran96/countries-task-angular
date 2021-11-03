import { createAction, props } from '@ngrx/store';

export const toggleSnackbar = createAction(
  '[Snackbar] Toggle Snackbar',
  props<{ open: boolean; message: string }>()
);

export const toggleLoader = createAction(
  '[Loader] Toggle Loader',
  props<{ showLoader: boolean }>()
);
