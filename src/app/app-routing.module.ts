import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { PageTitleStrategyService } from './strategy/page-title.strategy';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { PageDefaultConfig } from './app-core.model';
import { PyScriptPage } from './pages/py-script/py-script.component';

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
    data: {
      loadingTimeout: 1800,
    } as PageDefaultConfig,
    loadChildren: () =>
      import('./pages/memes/memes.module').then((m) => m.MemesModule),
  },
  {
    title: 'Py-Script',
    path: 'py-script',
    data: { loadingTimeout: 400 } as PageDefaultConfig,
    loadComponent: () =>
      import('./pages/py-script/py-script.component').then(
        (c) => c.PyScriptPage
      ),
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
