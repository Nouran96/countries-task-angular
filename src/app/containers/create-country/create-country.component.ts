import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { toggleSnackbar } from 'src/app/store/actions/shared.actions';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.scss'],
})
export class CreateCountryComponent implements OnInit {
  constructor(
    private countriesService: CountriesService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createNewCountry(data: Country) {
    console.log(data);
    this.countriesService.createCountry(data).subscribe((res) => {
      this.store.dispatch(toggleSnackbar({ open: true, message: res.message }));
      this.router.navigateByUrl('/');
    });
  }
}
