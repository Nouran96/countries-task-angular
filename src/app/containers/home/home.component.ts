import {
  Component,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { allCountriesRecieve } from 'src/app/store/actions/countries.actions';
import { PageEvent } from '@angular/material/paginator';

const NUM_OF_RECORDS = 10;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  countries: Array<Country>;
  paginatedCountries: Array<Country>;

  displayedColumns: Array<string> = [
    'name',
    'population',
    'numberOfStates',
    'actions',
  ];

  pageIndex: number = 0;

  constructor(
    private countriesService: CountriesService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data) => {
      if (!data.error) {
        this.store.dispatch(allCountriesRecieve({ countries: data.data }));
        this.countries = data.data;
        this.paginatedCountries = this.countries.slice(
          this.pageIndex * NUM_OF_RECORDS,
          (this.pageIndex + 1) * NUM_OF_RECORDS
        );
      }
    });
  }

  onPageChange(page: PageEvent) {
    this.pageIndex = page.pageIndex;

    this.paginatedCountries = this.countries.slice(
      page.pageIndex * page.pageSize,
      (page.pageIndex + 1) * page.pageSize
    );
  }
}
