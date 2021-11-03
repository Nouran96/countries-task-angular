import { createFeatureSelector } from '@ngrx/store';
import { LoginData } from 'src/app/models/auth.model';

export const selectAuth = createFeatureSelector<LoginData>('auth');
