import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from 'src/app/models/shared.model';

export const selectShared = createFeatureSelector<SharedState>('shared');

export const selectSnackbar = createSelector(selectShared, (shared) => ({
  openSnackbar: shared.openSnackbar,
  message: shared.message,
}));

export const selectLoader = createSelector(selectShared, (shared) => ({
  showLoader: shared.showLoader,
}));
