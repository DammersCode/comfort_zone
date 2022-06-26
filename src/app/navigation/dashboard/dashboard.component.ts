import { LiveChatPreview } from './card-previews/live-chat-preview/live-chat-preview.component';
import { TicTacToePreview } from './card-previews/tic-tac-toe-preview/tic-tac-toe-preview.component';
import { PsScriptPreview } from './card-previews/ps-script-preview/ps-script-preview.component';
import { BreakpointsService } from '../../services/breakpoints.service';
import { MemesPreviewComponent } from './card-previews/memes-preview/memes-preview.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { IDashboardLayout } from './dashboard-layout.model';
import { CocktailsPreviewComponent } from './card-previews/cocktails-preview/cocktails-preview.component';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import * as Aos from 'aos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  private cardsLayout: IDashboardLayout[] = [
    {
      title: 'Cocktails',
      subtitle: 'There can’t be good living where there is not good drinking.',
      cols: 1,
      rows: 1,
      icon: 'cocktail',
      link: '/cocktails',
      preview: {
        component: CocktailsPreviewComponent,
      },
    },
    {
      title: 'Memes',
      subtitle: `People are a–holes. Just make sure you’re not the toilet paper.`,
      icon: 'doge',
      link: '/memes',
      preview: {
        component: MemesPreviewComponent,
      },
      cols: 1,
      rows: 1,
    },
    {
      title: 'Python',
      subtitle: 'Write your own python code in WEB.',
      cols: 1,
      rows: 1,
      icon: 'python',
      link: '/py-script',
      preview: {
        component: PsScriptPreview,
      },
    },
    {
      title: 'Tic-Tac-Toe',
      icon: 'tictactoe',
      cols: 1,
      rows: 1,
      preview: {
        component: TicTacToePreview,
      },
    },
    {
      title: 'Live Chat',
      icon: 'chat',
      cols: 1,
      rows: 1,
      preview: {
        component: LiveChatPreview,
      },
    },
  ];

  public cards: IDashboardLayout[] = [];

  private isHandset$ = this.pageViewService.isHandset$.subscribe(
    (isHandset) => {
      //mobile
      if (isHandset) {
        this.cards = this.layoutTooMobile(this.cardsLayout);
      } else {
        //desktop
        this.cards = this.cardsLayout;
      }
    }
  );

  constructor(private pageViewService: BreakpointsService) {}

  ngOnDestroy(): void {
    this.isHandset$.unsubscribe();
  }

  private layoutTooMobile(layout: IDashboardLayout[]): IDashboardLayout[] {
    let newLayout = _.cloneDeep(layout);
    newLayout.map((nLayout) => {
      if (nLayout.cols === 1) {
        nLayout.cols = 2;
      }
    });
    return newLayout;
  }
}
