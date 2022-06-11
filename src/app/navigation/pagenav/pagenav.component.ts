import { BreakpointsService } from '../../services/breakpoints.service';
import { IPageNavigation } from './interfaces/ipage-navigation.model';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';
import { CoreService } from '../../app-core.service';

@Component({
  selector: 'pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.scss'],
})
export class PageNavigation implements OnInit {
  public pageConfig: IPageNavigation = { title: 'error' };

  constructor(
    public navigationService: NavigationService,
    public coreService: CoreService
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
