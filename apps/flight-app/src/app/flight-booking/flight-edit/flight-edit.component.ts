import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { ComponentWithExitWarning } from '../../shared/exit/exit.guard';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
})
export class FlightEditComponent implements OnInit, ComponentWithExitWarning {
  id: string | undefined;
  showDetails: string | undefined;
  showWarning = false;
  router: Observer<boolean> | undefined;

  constructor(private route: ActivatedRoute) {}

  canExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable<boolean>((observer: Observer<boolean>) => {
      this.router = observer;
    }); 
  }

  decide(answer: boolean) {
    this.showWarning = false;
    if (this.router) {
      this.router.next(answer);
    }
  }

  del(): void {
    console.log('We would delete now if this was not a shareware version!');
  }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

}
