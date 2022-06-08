import { PageTitleStrategyService } from '../app/services/page-title-strategy.service';
import { MemesPage } from './pages/memes/memes.component';
import { IPageNavigation } from './pages/pagenav/interfaces/ipage-navigation.model';
import { CocktailsPage } from './pages/cocktails/cocktails.component';
import { PageNavigation } from './pages/pagenav/pagenav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'navigation', component: NavigationComponent },
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
  { path: '**', redirectTo: 'navigation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: PageTitleStrategyService }],
})
export class AppRoutingModule {}
