import { PageNavigation } from './navigation/pagenav/pagenav.component';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { PageTitleStrategyService } from '../app/services/page-title-strategy.service';
import { MemesPage } from './pages/memes/memes.component';

import { CocktailsPage } from './pages/cocktails/cocktails.component';

import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { IPageNavigation } from './navigation/pagenav/interfaces/ipage-navigation.model';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    title: 'Cocktails',
    path: 'cocktails',
    component: PageNavigation,
    data: {
      title: 'Cocktails',
      page: {
        component: CocktailsPage,
      },
    } as IPageNavigation,
  },
  {
    title: 'Memes',
    path: 'memes',
    component: PageNavigation,
    data: {
      title: 'Memes',
      page: {
        component: MemesPage,
      },
    } as IPageNavigation,
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: PageTitleStrategyService }],
})
export class AppRoutingModule {}
