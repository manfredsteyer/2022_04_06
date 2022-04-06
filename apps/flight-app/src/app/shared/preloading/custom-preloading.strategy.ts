

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, Observable, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomPreloadingStragegy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {

        if (route.data?.['preload']) {
            return load();
        }
        return of(null);

        // return of(true).pipe(delay(7000), switchMap(() => load()));
    }

}
