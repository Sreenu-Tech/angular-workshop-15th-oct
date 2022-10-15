import { Component, OnInit } from '@angular/core';
import { ICountryState } from '../models/countrystate.model';
import { CountryStateService } from '../service/country-state.service';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent implements OnInit {

  countryOptions: ICountryState[] = [];
  stateOptions: ICountryState[] = [];

  countryCode: string = '';

  constructor(private service: CountryStateService) { }

  ngOnInit(): void {
    // load the country
    this.loadCountry();
  }

  private loadCountry() {
    this.service.countries().subscribe(results => {
      this.countryOptions = results;
    })
  }

  handleCountryChange() {
    if (this.countryCode) {
      this.service.states(this.countryCode).subscribe(results => {
        this.stateOptions = results;
      })
    }
  }

}
