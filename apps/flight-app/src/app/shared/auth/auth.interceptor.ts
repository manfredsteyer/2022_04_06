import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { needsToken } from 'libs/flight-lib/src/lib/services/flight.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Important: Don't send out sensitive
    //            security header to everyone!

    console.log('http context', req.context);
    // const vNeedsToken = req.context.get(needsToken).valueOf();

    if (req.url.startsWith('http://www.angular.at')) {
      const headers = req.headers.set('Authorization', 'Basic Just-for-Demonstration');
      // We will add a meaningful header later during the auth exercise!
      req = req.clone({ headers });
    }

    return next.handle(req).pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(event: HttpErrorResponse) {
    if (event.status == 401 || event.status == 403) {
      this.router.navigate(['/home', { needsLogin: true }]);
    }

    return throwError(() => event);
  }
}
