import { PageViewService } from './../services/page-view.service';
import { NavigationService } from './../services/navigation.service';
import {
  Component,
  OnDestroy,
  OnInit,
  HostListener,
  Inject,
} from '@angular/core';

import { Observable } from 'rxjs';

import { ViewportScroller } from '@angular/common';

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
    },
  };

  public isHandset$: Observable<boolean> = this.pageViewService.isHandset$;

  constructor(private pageViewService: PageViewService) {}

  ngOnDestroy(): void {
    this.isHandset$.subscribe();
  }

  ngOnInit(): void {
    this.isHandset$.subscribe((isHandset) => {
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
          'Here you can find many interesting and experimental sites / components',
          'If you find something not finished or buggy let me know',
          'If you find something that i could include leave me a message on github',
          'What do i use? ^1200 Angular v.14',
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
  }
}
