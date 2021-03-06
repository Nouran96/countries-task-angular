import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;
  @Input() type: 'list' | '';

  constructor() {}

  ngOnInit(): void {}

  getCardClasses(): Object {
    return {
      card: true,
      ...(this.type === 'list' ? { multiple: true, pointer: true } : {}),
    };
  }
}
