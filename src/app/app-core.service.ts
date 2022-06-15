import { Subject, throttleTime, Observable } from 'rxjs';
import { UrlService } from './services/url.service';
import { NavigationService } from './services/navigation.service';
import { BreakpointsService } from './services/breakpoints.service';
import { IconRegistrationService } from './services/icon-registration.service';
import { Injectable } from '@angular/core';
import * as AOS from 'aos';

/**
 * Core Service Registers all Core Services that needs to be included in the app
 */
@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public scrollEventSubject$: Subject<Event> = new Subject();
  public scrollEvent$: Observable<Event> =
    this.scrollEventSubject$.asObservable();
  public isMobileNavigation: boolean = false;
  constructor(
    private IconRegistrationService: IconRegistrationService,
    private BreakpointsService: BreakpointsService,
    private NavigationService: NavigationService,
    private UrlService: UrlService
  ) {
    AOS.init({ once: true });
    window.addEventListener(
      'scroll',
      (event) => {
        this.scrollEventSubject$.next(event);
      },
      true
    );
    this.scrollEvent$.pipe(throttleTime(100)).subscribe(() => {
      AOS.refresh();
    });
  }
}
