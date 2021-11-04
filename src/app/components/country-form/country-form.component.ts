import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  @Input() title: string;
  @Output() formSubmitted = new EventEmitter<Country>();

  countryName: string = '';
  countryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {
    this.countryName = this.route.snapshot.params['country'];
  }

  ngOnInit(): void {
    const numberRegex = '^[0-9]*$';

    this.countryForm = this.fb.group({
      name: [
        {
          value: '',
          ...(this.countryName ? { disabled: true } : { disabled: false }),
        },
        [Validators.required],
      ],
      population: ['', [Validators.required, Validators.pattern(numberRegex)]],
      numberOfStates: [
        '',
        [Validators.required, Validators.pattern(numberRegex)],
      ],
    });

    if (this.countryName) {
      this.countriesService
        .getCountry(this.countryName)
        .subscribe((data) => this.countryForm.patchValue(data.data));
    }
  }

  get countryFormControls() {
    return this.countryForm.controls;
  }

  isFieldInvalid(name: string): boolean {
    return (
      this.countryFormControls[name].invalid &&
      (this.countryFormControls[name].dirty ||
        this.countryFormControls[name].touched)
    );
  }

  handleSubmit(): void {
    this.formSubmitted.emit({
      ...this.countryForm.getRawValue(),
      population: parseInt(this.countryForm.value.population),
      numberOfStates: parseInt(this.countryForm.value.numberOfStates),
    });
  }
}
