import { Subject, throttleTime, Observable, BehaviorSubject } from 'rxjs';
import { UrlService } from './services/url.service';
import { NavigationService } from './services/navigation.service';
import { BreakpointsService } from './services/breakpoints.service';
import { IconRegistrationService } from './services/icon-registration.service';
import { Injectable } from '@angular/core';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import * as _ from 'lodash';
import { PageDefaultConfig } from './app-core.model';

/**
 * Core Service Registers all Core Services that needs to be included in the app
 * and controls all major controls
 */
@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private pageConfig: PageDefaultConfig = {};
  private defaultSpinnerTimeout: number = 800;

  public scrollEventSubject$: Subject<Event> = new Subject();
  public scrollEvent$: Observable<Event> =
    this.scrollEventSubject$.asObservable();
  public isMobileNavigation: boolean = false;
  constructor(
    private IconRegistrationService: IconRegistrationService,
    private BreakpointsService: BreakpointsService,
    private NavigationService: NavigationService,
    private UrlService: UrlService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    //#region lazy load spinner
    this.router.events.subscribe((event) => {
      this.pageConfig = (<any>event)?.route?.data;
      let timeout: number = 1800;
      if (event instanceof RouteConfigLoadStart) {
        this.spinner.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.spinner.hide();
        }, this.pageConfig?.loadingTimeout ?? this.defaultSpinnerTimeout);
      }
    });
    //#endregion

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
