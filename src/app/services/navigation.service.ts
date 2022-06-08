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
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  public firstChildPageConfig: any = {};
  public rootPageConfig: any = {};
  private history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
      if (event instanceof RoutesRecognized) {
        this.firstChildPageConfig = event.state.root.firstChild?.data;
        this.rootPageConfig = event.state.root;
      }
    });
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
