import { CoreService } from './../app-core.service';
import { PageNavigation } from './pagenav/pagenav.component';
import { BreakpointsService } from '../services/breakpoints.service';

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { Observable, Subscription, take } from 'rxjs';
import { NavigationService } from '../services/navigation.service';
import { IPageNavigation } from './pagenav/interfaces/ipage-navigation.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  public _typeConfig = {
    typeString: [''],
    config: {
      loop: false,
      showCursor: true,
      startDelay: 1400,
    },
  };

  public pagNavVisible: boolean = false;

  public isHandset$: Observable<boolean> = this.pageViewService.isHandset$;

  constructor(
    private pageViewService: BreakpointsService,
    public coreService: CoreService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.isHandset$.pipe(take(1)).subscribe((isHandset) => {
      //mobile
      if (isHandset) {
        this._typeConfig.typeString = ['Welcome to the', 'Comfort Zone'];
        this._typeConfig.config.loop = false;
        this._typeConfig.config.showCursor = false;
      }
      //tablet - desktop
      else {
        this._typeConfig.typeString = [
          'Welcome to the Comfort Zone 🤯   ',
          'Created by github/DammersCode 🕶️   ',
          `What do i use? ^1200 Angular ${VERSION.full}`,
        ];
        this._typeConfig.config.loop = true;
        this._typeConfig.config.showCursor = true;
      }
    });
  }

  public setDefaultTyping() {
    this._typeConfig.typeString = ['Comfort Zone'];
    this._typeConfig.config.loop = false;
    this._typeConfig.config.showCursor = false;
    this._typeConfig.config.startDelay = 0;
  }

  public toggleChanged(event: MatSlideToggleChange) {
    this.coreService.isMobileNavigation = event.checked;
  }
}
