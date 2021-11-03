export interface SharedState {
  openSnackbar: boolean;
  message: string;
  showLoader: boolean;
}

export interface Snackbar {
  openSnackbar: boolean;
  message: string;
}

export interface Loader {
  showLoader: boolean;
}
