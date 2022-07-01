import { BreakpointsService } from '../../services/breakpoints.service';
import { IPageNavigation } from './interfaces/ipage-navigation.model';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
})
export class MobileNavigation implements OnInit {
  @Input() show: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  public navigateBack(): void {
    this.navigationService.back();
  }

  public navigateForward(): void {
    this.navigationService.forward();
  }
}
