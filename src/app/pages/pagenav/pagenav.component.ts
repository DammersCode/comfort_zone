import { IPageNavigation } from './interfaces/ipage-navigation.model';
import { Router, RoutesRecognized } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.scss'],
})
export class PageNavigation implements OnInit {
  public pageConfig: IPageNavigation = { title: 'error' };

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navigationService: NavigationService
  ) {
    this.pageConfig = this.navigationService.firstChildPageConfig;
  }

  ngOnInit(): void {}

  public navigateBack(): void {
    this.navigationService.back();
  }
}
