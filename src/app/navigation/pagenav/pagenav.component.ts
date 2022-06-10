import { BreakpointsService } from '../../services/breakpoints.service';
import { IPageNavigation } from './interfaces/ipage-navigation.model';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.scss'],
})
export class PageNavigation implements OnInit {
  public pageConfig: IPageNavigation = { title: 'error' };

  public isHandset$: Observable<boolean> = this.breakpointsService.isHandset$;

  constructor(
    public navigationService: NavigationService,
    private breakpointsService: BreakpointsService
  ) {
    this.pageConfig = this.navigationService.firstChildPageConfig;
  }

  ngOnInit(): void {}

  public navigateBack(): void {
    this.navigationService.back();
  }

  public navigateForward(): void {
    this.navigationService.forward();
  }
}
