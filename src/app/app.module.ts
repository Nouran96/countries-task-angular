import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/reducers';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { environment } from '../environments/environment';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { httpInterceptorProviders } from './interceptors';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInOverlayComponent } from './components/spinner-in-overlay/spinner-in-overlay.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { CountryDetailsComponent } from './containers/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthFormComponent,
    RegisterComponent,
    SnackbarComponent,
    AppBarComponent,
    HomeComponent,
    SpinnerComponent,
    SpinnerInOverlayComponent,
    CountryCardComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
