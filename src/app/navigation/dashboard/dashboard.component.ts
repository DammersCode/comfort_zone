import { MemesPreviewComponent } from './card-previews/memes-preview/memes-preview.component';
import { Component } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { IDashboardLayout } from './dashboard-layout.model';
import { CocktailsPreviewComponent } from './card-previews/cocktails-preview/cocktails-preview.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
    { title: 'Card 3', cols: 2, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 },
    { title: 'Card 5', cols: 1, rows: 1 },
  ];

  /** Based on the screen size, switch from standard to one column per row */
  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      //mobile
      if (matches) {
        return this.layoutTooMobile(this.cardsLayout);
      }

      //desktop
      return this.cardsLayout;
    }),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

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
