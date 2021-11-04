export interface Country {
  population: number;
  numberOfStates: number;
  name: string;
}

export interface CountryData {
  countries: Array<Country>;
  selectedCountry: Country | {};
}
