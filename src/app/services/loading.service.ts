import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading: boolean;

  loaderVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loaderVisibilityChange.subscribe((value) => {
      this.loading = value;
    });
  }

  setIsLoading(isLoading: boolean): void {
    this.loaderVisibilityChange.next(isLoading);
  }

  get isLoading(): boolean {
    return this.loading;
  }
}
