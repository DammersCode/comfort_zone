import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardLayout } from './dashboard-layout.model';
import { CocktailsPreviewComponent } from './card-previews/cocktails-preview/cocktails-preview.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private cardsLayout: DashboardLayout[] = [
    {
      title: 'Cocktails',
      subtitle: 'There can’t be good living where there is not good drinking.',
      cols: 1,
      rows: 1,
      icon: 'cocktail',
      view: {
        component: CocktailsPreviewComponent,
      },
    },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 2, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 },
    { title: 'Card 5', cols: 1, rows: 1 },
  ];

  /** Based on the screen size, switch from standard to one column per row */
  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      //mobile
      if (matches) {
        return this.cardsLayout;
      }

      //desktop
      return this.cardsLayout;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
