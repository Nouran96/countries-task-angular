import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  @Input() title: string;
  @Output() formSubmitted = new EventEmitter<Country>();

  countryForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const numberRegex = '^[0-9]*$';

    this.countryForm = this.fb.group({
      name: ['', [Validators.required]],
      population: ['', [Validators.required, Validators.pattern(numberRegex)]],
      numberOfStates: [
        '',
        [Validators.required, Validators.pattern(numberRegex)],
      ],
    });
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
      ...this.countryForm.value,
      population: parseInt(this.countryForm.value.population),
      numberOfStates: parseInt(this.countryForm.value.numberOfStates),
    });
  }
}
