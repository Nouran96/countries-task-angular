import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { allCountriesRecieve } from 'src/app/store/actions/countries.actions';
import { toggleSnackbar } from 'src/app/store/actions/shared.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries: Array<Country>;
  constructor(
    private countriesService: CountriesService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data) => {
      if (!data.error) {
        this.store.dispatch(allCountriesRecieve({ countries: data.data }));
        this.countries = data.data;
      }
    });
  }
}
