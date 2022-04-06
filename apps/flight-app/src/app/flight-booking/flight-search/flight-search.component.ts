/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FlightService } from '@flight-workspace/flight-lib';
import { filter, firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$ = this.flightService.flights$.pipe(
    map(flights => flights.filter(f => f.id % 2 === 1))
  );

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {

    // firstValueFrom(this.flightService.flights$)

  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

}
