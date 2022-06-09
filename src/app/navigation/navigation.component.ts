import { PageViewService } from './../services/page-view.service';

import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';

import { Observable, take } from 'rxjs';

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

  public isHandset$: Observable<boolean> = this.pageViewService.isHandset$;

  constructor(private pageViewService: PageViewService) {}

  ngOnDestroy(): void {
    this.isHandset$.subscribe();
  }

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
}
