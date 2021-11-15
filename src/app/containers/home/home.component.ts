import {
  Component,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { allCountriesRecieve } from 'src/app/store/actions/countries.actions';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // To access library classes and override them
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<Country>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: Array<string> = [
    'name',
    'population',
    'numberOfStates',
    'actions',
  ];

  constructor(
    private countriesService: CountriesService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data) => {
      if (!data.error) {
        // this.store.dispatch(allCountriesRecieve({ countries: data.data }));
        this.dataSource = new MatTableDataSource<Country>(data.data);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
