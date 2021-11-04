import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { toggleSnackbar } from 'src/app/store/actions/shared.actions';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss'],
})
export class EditCountryComponent implements OnInit {
  constructor(
    private store: Store,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  editCountry(data: Country) {
    this.countriesService.editCountry(data).subscribe((res) => {
      this.store.dispatch(toggleSnackbar({ open: true, message: res.message }));
      this.router.navigateByUrl(`/details/${data.name}`);
    });
  }
}
