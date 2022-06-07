import { MemesPage } from './pages/memes/memes.component';
import { IPageNavigation } from './pages/pagenav/interfaces/ipage-navigation.model';
import { CocktailsPage } from './pages/cocktails/cocktails.component';
import { PageNavigation } from './pages/pagenav/pagenav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'navigation', component: NavigationComponent },
  {
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
})
export class AppRoutingModule {}
