import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  Router,
  NavigationEnd,
  RoutesRecognized,
  RouterStateSnapshot,
  TitleStrategy,
  ActivatedRouteSnapshot,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import * as _ from 'lodash';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  public firstChildPageConfig: any = {};
  public rootPageConfig: any = {};
  // public isForwardPossible: boolean = false;
  private history: string[] = [];

  // private _count: number = 0;
  // private _countNavigation: number = 0;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
      if (event instanceof RoutesRecognized) {
        this.firstChildPageConfig = event.state.root.firstChild?.data;

        this.rootPageConfig = event.state.root;
      }

      // if (event instanceof NavigationStart) {
      //   if (event.navigationTrigger?.toString() === 'imperative') {
      //     this._countNavigation++;
      //     this._count++;
      //   }
      //   if (event.navigationTrigger?.toString() === 'popstate') {
      //     if (this._count !== this._countNavigation) {
      //       this.isForwardPossible = true;
      //     } else {
      //       this.isForwardPossible = false;
      //     }
      //   }
      // }
    });
  }

  public back(): void {
    // this._countNavigation--;
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  public forward(): void {
    // this._countNavigation++;
    this.location.forward();
  }
}
