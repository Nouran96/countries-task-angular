import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './containers/country-details/country-details.component';
import { CreateCountryComponent } from './containers/create-country/create-country.component';
import { EditCountryComponent } from './containers/edit-country/edit-country.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard],
  },
  {
    path: 'new',
    component: CreateCountryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:country',
    component: CountryDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:country',
    component: EditCountryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
