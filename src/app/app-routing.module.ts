import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { PageTitleStrategyService } from '../app/services/page-title-strategy.service';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // {
  //   title: 'Cocktails',
  //   path: 'cocktails',
  //   component: PageNavigation,
  //   data: {
  //     title: 'Cocktails',
  //     page: {
  //       component: CocktailsPage,
  //     },
  //   } as IPageNavigation,
  // },
  {
    title: 'Cocktails',
    path: 'cocktails',
    loadChildren: () =>
      import('./pages/cocktails/cocktails.module').then(
        (m) => m.CocktailsModule
      ),
  },
  {
    title: 'Memes',
    path: 'memes',
    loadChildren: () =>
      import('./pages/memes/memes.module').then((m) => m.MemesModule),
  },
  // {
  //
  //   path: 'memes',
  //   component: PageNavigation,
  //   data: {
  //     title: 'Memes',
  //     page: {
  //       component: MemesPage,
  //     },
  //   } as IPageNavigation,
  // },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: PageTitleStrategyService }],
})
export class AppRoutingModule {}
