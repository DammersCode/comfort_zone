import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        return matches;
      }),
      shareReplay()
    );
  public isXSmall$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map(({ matches }) => {
        return matches;
      }),
      shareReplay()
    );
  public isXLarge$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XLarge)
    .pipe(
      map(({ matches }) => {
        return matches;
      }),
      shareReplay()
    );
  public isLarge$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Large)
    .pipe(
      map(({ matches }) => {
        return matches;
      }),
      shareReplay()
    );
}
