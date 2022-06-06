import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsPage } from './pages/cocktails/cocktails.component';

const routes: Routes = [
  { path: 'navigation', component: NavigationComponent },
  { path: 'cocktails', component: CocktailsPage },
  { path: '**', redirectTo: 'navigation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
